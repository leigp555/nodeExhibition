var f=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function c(p,u){var i,n,o,s=p.posMax,r=p.pos;if(p.src.charCodeAt(r)!==94||u||r+2>=s)return!1;for(p.pos=r+1;p.pos<s;){if(p.src.charCodeAt(p.pos)===94){i=!0;break}p.md.inline.skipToken(p)}return!i||r+1===p.pos||(n=p.src.slice(r+1,p.pos),n.match(/(^|[^\\])(\\\\)*\s/))?(p.pos=r,!1):(p.posMax=p.pos,p.pos=r+1,o=p.push("sup_open","sup",1),o.markup="^",o=p.push("text","",0),o.content=n.replace(f,"$1"),o=p.push("sup_close","sup",-1),o.markup="^",p.pos=p.posMax+1,p.posMax=s,!0)}var l=function(u){u.inline.ruler.after("emphasis","sup",c)};export{l as m};