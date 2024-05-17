"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[4392],{4127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),o=t(8453);const r={sidebar_position:9},i="Submitting code",a={id:"web-mobile-app-dev/frontend/submitting-work",title:"Submitting code",description:"Document Creation 6 May, 2024. Authors: Leesa Ward.",source:"@site/docs/web-mobile-app-dev/frontend/submitting-work.md",sourceDirName:"web-mobile-app-dev/frontend",slug:"/web-mobile-app-dev/frontend/submitting-work",permalink:"/redback-documentation/docs/web-mobile-app-dev/frontend/submitting-work",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/web-mobile-app-dev/frontend/submitting-work.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Automated tests",permalink:"/redback-documentation/docs/web-mobile-app-dev/frontend/tests"},next:{title:"Project maintenance",permalink:"/redback-documentation/docs/category/project-maintenance"}},c={},l=[{value:"Useful links",id:"useful-links",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"submitting-code",children:"Submitting code"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Document Creation:"})," 6 May, 2024. ",(0,s.jsx)(n.strong,{children:"Last Edited:"})," 6 May, 2024. ",(0,s.jsx)(n.strong,{children:"Authors:"})," Leesa Ward."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before raising a pull request, please ensure the below checks pass."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run eslint to check for any formatting and linting issues, and fix any that are identified in your code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Often, linting errors (such as spacing issues) can be fixed automatically by your IDE. It is ",(0,s.jsx)(n.strong,{children:"highly recommended"})," to configure it to run ",(0,s.jsx)(n.code,{children:"eslint --fix"})," when you save a file, and save yourself a lot of time and tedious effort fixing little things you mightn't even notice. You can do this in ",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/help/webstorm/eslint.html",children:"WebStorm"})," and ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"VS Code"})," and probably others."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Check that project structure, file naming, and file type conventions have been followed ",(0,s.jsx)(n.em,{children:"(note: this also uses eslint, so will also pick up any other formatting and linting issues that step 1 would - I've just made it a separate step for clarity)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run lint:structure\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important!"})," If you got any errors from the project structure check, fix them before proceeding. If your feature/change cannot work with the current configuration in ",(0,s.jsx)(n.code,{children:"project-structure.json"}),", include the necessary config change in your pull request so it can be assessed by reviewers, and to ensure that non-compliant code does not get merged. Documentation for the linter can be found at ",(0,s.jsx)(n.a,{href:"https://github.com/Igorkowalski94/eslint-plugin-project-structure",children:"eslint-plugin-project-structure"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For most work, the main directory structure and naming conventions to be aware of follow the below pattern:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- src/\r\n     - routes/ (all apps EXCEPT Redback UI)\r\n           - RouteName/\r\n                 - RouteName.tsx\r\n                 - RouteName.style.ts\r\n                 - RouteName.test.tsx\r\n     - components/\r\n           - ComponentName/\r\n                 - ComponentName.tsx\r\n                 - ComponentName.style.ts\r\n                 - ComponentName.test.tsx\r\n                 - ComponentName.stories.tsx (Redback UI only)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the file names match the folder names, and all are in ",(0,s.jsx)(n.code,{children:"PascalCase"})," (this is the general React convention). If you use the generator script to create new ",(0,s.jsx)(n.a,{href:"/redback-documentation/docs/web-mobile-app-dev/frontend/new-routes",children:"pages/routes"})," and ",(0,s.jsx)(n.a,{href:"/redback-documentation/docs/web-mobile-app-dev/frontend/new-components",children:"components"}),", they will follow this automatically."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run unit tests, and if any of the tests related to the components you've worked on or used fail, fix the problem"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run test:unit\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When all checks are passing and your work is ready for peer feedback, create a pull request on GitHub."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../onboarding/github/pull-requests",children:"Packaging pull requests"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Igorkowalski94/eslint-plugin-project-structure",children:"Project structure linter docs"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/help/webstorm/eslint.html",children:"ESLint in WebStorm"})," - How to configure ESLint in WebStorm and fix formatting on save"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint VS Code extension"})," - can be figured to fix formatting on save"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);