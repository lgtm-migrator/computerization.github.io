"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[3089],{3168:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(5309),n=a(921),l=a(6355),i=a(458),o=a(7192),s=a(6613),m=a(5433),c="sidebar_Wb7V",u="sidebarItemTitle_X_vu",d="sidebarItemList_qCf4",g="sidebarItem_S2Mt",p="sidebarItemLink_JyWz",v="sidebarItemLinkActive_vhZy";function h(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:v},e.title))})))))}var b=a(9565);function f(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return n.createElement(b.Zo,{component:f,props:e})}function Z(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(E,{sidebar:t}):n.createElement(h,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(Z,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},4224:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(921),n=a(6355),l=a(5528),i=a(2045),o=a(9327),s=a(3168),m=a(7018),c=a(4516),u=a(6638);function d(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,n=t.blogDescription,o=t.blogTitle,s="/"===t.permalink?a:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:s,description:n}),r.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(s.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(c.Z,{metadata:t}))}function p(e){return r.createElement(i.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(d,e),r.createElement(g,e))}},4516:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(921),n=a(5433),l=a(266);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},7018:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(921),n=a(6355),l=a(5433),i=a(6613),o=a(4111),s=a(180),m=a(1788),c=a(3115),u=a(3069),d=a(8205);function g(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(g,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var v="authorCol_pDpC",h="imageOnlyAuthorRow_wK93",b="imageOnlyAuthorCol_kuGx";function f(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?h:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?b:v),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var E="blogPostTitle_IuCa",Z="blogPostData_c9RE",N="blogPostDetailsFull_merK";function _(e){var t,a,g=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,v=e.children,h=e.frontMatter,b=e.assets,_=e.metadata,k=e.truncated,P=e.isBlogPostPage,w=void 0!==P&&P,T=_.date,y=_.formattedDate,I=_.permalink,C=_.tags,F=_.readingTime,L=_.title,x=_.editUrl,M=_.authors,R=null!=(t=b.image)?t:h.image,A=!w&&k,O=C.length>0,U=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(U,{className:E,itemProp:"headline"},w?L:r.createElement(i.Z,{itemProp:"url",to:I},L)),r.createElement("div",{className:(0,n.Z)(Z,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},y),void 0!==F&&r.createElement(r.Fragment,null," \xb7 ",g(F))),r.createElement(f,{authors:M,assets:b})),R&&r.createElement("meta",{itemProp:"image",content:p(R,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,v)),(O||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",w&&N)},O&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},r.createElement(d.Z,{tags:C})),w&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),A&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},r.createElement(i.Z,{to:_.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},180:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(921),n=a(5528),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}},4994:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(921),n=a(1690);function l(e){var t=e.children;return r.createElement("p",null,r.createElement("div",{className:"alert alert--info"},t))}var i=Object.assign({},n.Z,{question:function(e){return r.createElement(l,e)}})}}]);