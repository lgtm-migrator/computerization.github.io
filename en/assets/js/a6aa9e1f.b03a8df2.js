"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[3089],{9201:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(8332),n=a(6687),l=a(6355),i=a(2067),m=a(525),o="sidebar_GK5C",s="sidebarItemTitle_Gdxj",c="sidebarItemList_w6Kb",d="sidebarItem_jtf7",u="sidebarItemLink_ndo3",g="sidebarItemLinkActive_hY4N",p=a(513);function E(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var b=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,r.Z)(e,b),s=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(E,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},9333:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(6687),n=a(5149),l=a(9201),i=a(8954),m=a(2086),o=a(8611),s=a(7684),c=a(6355);function d(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,m="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(o.d,{title:m,description:l}),r.createElement(s.Z,{tag:"blog_posts_list"}))}function u(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(l.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m.Z,{metadata:t}))}function g(e){return r.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.blogPages,o.kM.page.blogListPage)},r.createElement(d,e),r.createElement(u,e))}},2086:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(6687),n=a(513),l=a(9169);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8954:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(6687),n=a(6355),l=a(513),i=a(525),m=a(3110),o=a(8611),s=a(6039),c=a(2360),d=a(2715),u="blogPostTitle_IKxE",g="blogPostData_YqdP",p="blogPostDetailsFull_NncP",E=a(845),b="image_EQzn";function v(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function h(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(v,{href:o},r.createElement("img",{className:b,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(v,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var f="authorCol_cf6J",N="imageOnlyAuthorRow_S1ud",_="imageOnlyAuthorCol_pnDE";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?N:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?_:f),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,b=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,m.C)().withBaseUrl,h=e.children,f=e.frontMatter,N=e.assets,_=e.metadata,P=e.truncated,k=e.isBlogPostPage,w=void 0!==k&&k,T=_.date,I=_.formattedDate,y=_.permalink,A=_.tags,L=_.readingTime,x=_.title,M=_.editUrl,C=_.authors,R=null!=(t=N.image)?t:f.image,U=!w&&P,B=A.length>0,D=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(D,{className:u,itemProp:"headline"},w?x:r.createElement(i.Z,{itemProp:"url",to:y},x)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",b(L))),r.createElement(Z,{authors:C,assets:N})),R&&r.createElement("meta",{itemProp:"image",content:v(R,{absolute:!0})}),r.createElement("div",{id:w?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(B||P)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",w&&p)},B&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":U})},r.createElement(E.Z,{tags:A})),w&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:M})),U&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":B})},r.createElement(i.Z,{to:_.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},365:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(6687),n=a(3476);function l(e){var t=e.children;return r.createElement("p",null,r.createElement("div",{className:"alert alert--info"},t))}var i=Object.assign({},n.Z,{question:function(e){return r.createElement(l,e)}})}}]);