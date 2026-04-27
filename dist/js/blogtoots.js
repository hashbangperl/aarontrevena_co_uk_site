// https://techtoots.com/@aarontrevena
// https://techtoots.com/users/aarontrevena.rss
// hashtag blogpost

let formatter = new Intl.DateTimeFormat('en-UK', {
    dateStyle:'long',
    timeStyle:'medium'
});
  
async function getRecentToots(rssFeedUrl, count) {
	console.log(`about to fetch rss ${rssFeedUrl}`);
	let feedReq = await fetch(rssFeedUrl);
	let feedXml = await feedReq.text();
	let parser = new DOMParser();
	let doc = parser.parseFromString(feedXml, "application/xml");
    
    // throw error on malformed XML
    if (doc.querySelector("parsererror")) {
        throw new Error("Invalid RSS XML");
    }

    // loop through items, get count (i.e, 5) most recent with tag blogpost
    const channelTitle = doc.querySelector("channel > title")?.textContent?.trim() ?? "";
    const avatarUrl = doc.querySelector("channel > image > url")?.textContent?.trim() ?? "";
    const items = Array.from(doc.querySelectorAll("item"));
    const blogItems = items.filter((item) => {
      const categories = Array.from(item.querySelectorAll("category"))
        .map((c) => c.textContent?.trim().toLowerCase());
      return categories.includes("blogpost");
    });
    
    const toots = blogItems.slice(0, count).map((item) => {
        const toot = {
          name: channelTitle,
          avatar: avatarUrl,
          date: formatter.format(new Date(item.querySelector("pubDate")?.textContent ?? "")),
          link: item.querySelector("link")?.textContent?.trim() ?? "",
          description: item.querySelector("description")?.textContent ?? "",
        };

        // media:content is namespaced, so CSS selector with escaped colon
        const media = item.querySelector("media\\:content[medium='image']");
        if (media) toot.image = media.getAttribute("url");
        return toot;
      }
    );

    console.log(toots);

    return toots;
}

function unescape(s) {
	let d = document.createElement('div');
	d.innerHTML = s;
	return d.textContent;
}

async function init() {
    
    let template = document.querySelector('#tootDisplay');
    let $toots = document.querySelector('#blog');
    let $status = document.querySelector('#status');

    $status.innerHTML = '<p><i>Loading blog (mastodon toots)...</i></p>';
    let count = 5;
    let rssFeedUrl = 'https://techtoots.com/users/aarontrevena.rss';
    let recentToots = await getRecentToots(rssFeedUrl, count);
    for(let thisToot of recentToots) {
        let clone = template.content.cloneNode(true);
        clone.querySelector('.toot-body').innerHTML = thisToot.description;
        if(thisToot.image) {
            clone.querySelector('img.toot-media-img').src=thisToot.image;
        }
        clone.querySelector('.toot-footer p').innerHTML = thisToot.date;
        clone.querySelector('.toot-link a').href = thisToot.link;
        $toots.append(clone);
    }

    $status.innerHTML = '';

}
