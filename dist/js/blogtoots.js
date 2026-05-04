// https://techtoots.com/@aarontrevena
// https://techtoots.com/users/aarontrevena.rss
// hashtag blogpost

let formatter = new Intl.DateTimeFormat('en-UK', {
    dateStyle:'long',
    timeStyle:'medium'
});

const pageSize = 4;
let currentPage = 1;
let allToots = [];
const prevBtn = document.querySelector('#prevPage');
const nextBtn = document.querySelector('#nextPage');
const pageInfo = document.querySelector('#pageInfo');
const rssFeedUrl = 'https://techtoots.com/users/aarontrevena.rss';

async function getRecentToots(newPage) {
  let offset = (newPage - 1) * pageSize;

  // remove old cards (keep #status)
  if (newPage != currentPage) {
    let $oldtoots = document.querySelector('#blog');
    [...$oldtoots.querySelectorAll('.toot-blockquote')].forEach((el) => el.remove());
  }
  currentPage = newPage;

	let feedReq = await fetch(rssFeedUrl);
	let feedXml = await feedReq.text();
	let parser = new DOMParser();
	let doc = parser.parseFromString(feedXml, "application/xml");
  
  // throw error on malformed XML
  if (doc.querySelector("parsererror")) {
      throw new Error("Invalid RSS XML");
  }

  // loop through items, get pageSize (i.e, 5) most recent with tag blogpost
  const channelTitle = doc.querySelector("channel > title")?.textContent?.trim() ?? "";
  const avatarUrl = doc.querySelector("channel > image > url")?.textContent?.trim() ?? "";
  const items = Array.from(doc.querySelectorAll("item"));
  const blogItems = items.filter((item) => {
    const categories = Array.from(item.querySelectorAll("category"))
      .map((c) => c.textContent?.trim().toLowerCase());
    return categories.includes("blogpost");
  });
  if (currentPage + pageSize > blogItems.length) {
    console.log(`nothing for this page :  ${currentPage} / offset : ${offset} / pageSize : ${pageSize}`);
    return [];
  }

  const toots = blogItems.slice(offset, offset + pageSize).map((item) => {
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

  const totalPages = Math.ceil(blogItems.length / pageSize) || 1;
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  return toots;
}

function unescape(s) {
	let d = document.createElement('div');
	d.innerHTML = s;
	return d.textContent;
}

async function renderPageToots(newPage) {
    let template = document.querySelector('#tootDisplay');
    let $toots = document.querySelector('#blog');
    let $status = document.querySelector('#status');

    $status.innerHTML = '<p><i>Loading blog (mastodon toots)...</i></p>';
    let recentToots = await getRecentToots(newPage);
    for(let thisToot of recentToots) {
        let clone = template.content.cloneNode(true);
        clone.querySelector('.toot-body').innerHTML = thisToot.description;
        if(thisToot.image) {
            clone.querySelector('img.toot-media-img').src=thisToot.image;
        }
        clone.querySelector('.toot-footer p').innerHTML = thisToot.date;
        clone.querySelector('.toot-link').href = thisToot.link;
        $toots.append(clone);
    }

    $status.innerHTML = '';

    prevBtn.addEventListener('click', () => renderPageToots(currentPage - 1));
    nextBtn.addEventListener('click', () => renderPageToots(currentPage + 1));
}
