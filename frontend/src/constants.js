export const LOCAL_HOST_BACKEND_API_BASE_URL = 'http://localhost:8000/';
export const LOCAL_HOST_INCLUSIVE_LANGUAGE_REPORT_URL = `${LOCAL_HOST_BACKEND_API_BASE_URL}get_inclusive_language_report/`;

export const DARK_GREY = '#121212';
export const ERROR = '#CF6679';
export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const LIGHT_PURPLE = '#BB86FC';
export const DARK_PURPLE = '#3700B3';
export const TURQOISE = '#03DAC6';

export const TEST_DATA = {
  message:
    'Successful inclusive language analysis conducted on LiamTodd/human-centric-issue-visualiser',
  repo: 'LiamTodd/human-centric-issue-visualiser',
  data: [
    {
      file_path: 'human-centric-issue-visualiser',
      file_name: 'human-centric-issue-visualiser',
      parent: null,
      content: null,
      is_dir: true,
      children: [
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/.gitignore',
          file_name: '.gitignore',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content:
            '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# production\n/build\n\n# misc\n.DS_Store\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# prettier\n.prettierrc\n\n# test credentials\ntestCredentials.txt\n\n# mock data\nmockData.txt\n',
          is_dir: false,
          sspm_matches: {
            'ABLEIST LANGUAGE': {},
            'GENDERED LANGUAGE': {},
            'VIOLENT LANGUAGE': {},
            'AGEIST LANGUAGE': {},
            'RACIALLY CHARGED LANGUAGE': {},
            'BIASED LANGUAGE': {},
            'MILITARY LANGUAGE': {},
            OTHER: {},
          },
        },
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/package-lock.json',
          file_name: 'package-lock.json',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content:
          is_dir: false,
          sspm_matches: {
            'ABLEIST LANGUAGE': {
              mad: [
                37951, 132324, 350165, 374595, 439816, 459486, 479189, 564288,
                607305, 693701, 769154, 947142, 966296, 1019010, 1035245,
                1051075, 1116866, 1152081,
              ],
            },
            'GENDERED LANGUAGE': {},
            'VIOLENT LANGUAGE': {
              hang: [
                96425, 375185, 375281, 375302, 739838, 966527, 966623, 966644,
              ],
              hung: [34294, 475693, 690876, 1048412],
              hit: [
                6915, 11617, 250955, 343199, 522234, 522339, 522370, 668472,
                672387, 866375, 941395, 1082748, 1082853, 1082884,
              ],
            },
            'AGEIST LANGUAGE': {},
            'RACIALLY CHARGED LANGUAGE': {
              native: [
                137239, 137361, 137403, 138941, 772959, 773081, 773123, 774311,
              ],
              primitive: [
                273612, 274398, 275545, 275637, 275655, 620305, 620397, 620415,
                620697, 644375, 644473, 644497, 885285, 886071, 887029, 887121,
                887139, 1162610, 1162702, 1162720, 1162998, 1182347, 1182445,
                1182469,
              ],
            },
            'BIASED LANGUAGE': {
              normal: [
                78865, 78966, 78982, 83011, 83130, 83165, 190446, 197373,
                224358, 250550, 250597, 250651, 250700, 250752, 250798, 250854,
                250901, 250944, 295576, 472474, 472565, 472582, 472806, 472898,
                472916, 473079, 473169, 473185, 517459, 517554, 517574, 517758,
                518037, 518139, 518167, 518480, 518589, 518624, 519018, 519122,
                519152, 519541, 519648, 519681, 520073, 520174, 520201, 520587,
                520698, 520735, 521131, 521233, 521261, 521683, 521781, 521805,
                521982, 522223, 522328, 522359, 525787, 554955, 605031, 726669,
                726770, 726786, 729472, 729591, 729626, 817335, 822847, 845081,
                865970, 866017, 866071, 866120, 866172, 866218, 866274, 866321,
                866364, 906661, 1045890, 1045981, 1045998, 1046154, 1046246,
                1046264, 1046359, 1046449, 1046465, 1079311, 1079406, 1079426,
                1079606, 1079725, 1079827, 1079855, 1080044, 1080153, 1080188,
                1080432, 1080536, 1080566, 1080805, 1080912, 1080945, 1081187,
                1081288, 1081315, 1081551, 1081662, 1081699, 1081945, 1082047,
                1082075, 1082347, 1082445, 1082469, 1082642, 1082737, 1082842,
                1082873, 1085383, 1109207, 1150286,
              ],
            },
            'MILITARY LANGUAGE': {},
            OTHER: {
              fat: [
                230915, 231144, 405862, 515457, 660156, 850791, 851007, 991300,
                1078116, 1196682,
              ],
              lame: [509516, 1073867],
            },
          },
        },
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/package.json',
          file_name: 'package.json',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content:
            '{\n  "name": "human-centric-issue-visualiser",\n  "version": "0.1.0",\n  "homepage": "https://LiamTodd.github.io/human-centric-issue-visualiser",\n  "private": true,\n  "dependencies": {\n    "@octokit/request": "^6.2.0",\n    "@octokit/rest": "^18.12.0",\n    "@testing-library/jest-dom": "^5.16.4",\n    "@testing-library/react": "^13.3.0",\n    "@testing-library/user-event": "^13.5.0",\n    "bootstrap": "^5.1.3",\n    "chart.js": "^3.8.0",\n    "multiselect-react-dropdown": "^2.0.25",\n    "react": "^18.1.0",\n    "react-bootstrap": "^2.4.0",\n    "react-chartjs-2": "^4.2.0",\n    "react-dom": "^18.1.0",\n    "react-router-dom": "^6.3.0",\n    "react-scripts": "5.0.1",\n    "uuid": "^8.3.2",\n    "web-vitals": "^2.1.4"\n  },\n  "scripts": {\n    "predeploy": "npm run build",\n    "deploy":"gh-pages -d build", \n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "devDependencies": {\n    "gh-pages": "^4.0.0",\n    "prettier": "^2.6.2"\n  }\n}\n',
          is_dir: false,
          sspm_matches: {
            'ABLEIST LANGUAGE': {},
            'GENDERED LANGUAGE': {},
            'VIOLENT LANGUAGE': {},
            'AGEIST LANGUAGE': {},
            'RACIALLY CHARGED LANGUAGE': {},
            'BIASED LANGUAGE': {},
            'MILITARY LANGUAGE': {},
            OTHER: {},
          },
        },
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
          file_name: 'public',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content: null,
          is_dir: true,
          children: [
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/favicon.ico',
              file_name: 'favicon.ico',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                'WARNING: File type not currently supported - contents no analysed.',
              is_dir: false,
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/index.html',
              file_name: 'index.html',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/logo.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="description"\n      content="Web site created using create-react-app"\n    />\n    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n    <!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>Human Centric Issue Visualiser</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  </body>\n</html>\n',
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/logo.png',
              file_name: 'logo.png',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                'WARNING: File type not currently supported - contents no analysed.',
              is_dir: false,
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/logo192.png',
              file_name: 'logo192.png',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                'WARNING: File type not currently supported - contents no analysed.',
              is_dir: false,
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/logo512.png',
              file_name: 'logo512.png',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                'WARNING: File type not currently supported - contents no analysed.',
              is_dir: false,
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/manifest.json',
              file_name: 'manifest.json',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                '{\n  "short_name": "React App",\n  "name": "Create React App Sample",\n  "icons": [\n    {\n      "src": "logo.png",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    },\n    {\n      "src": "logo.png",\n      "type": "image/png",\n      "sizes": "192x192"\n    },\n    {\n      "src": "logo.png",\n      "type": "image/png",\n      "sizes": "512x512"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n',
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public/robots.txt',
              file_name: 'robots.txt',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/public',
              content:
                '# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n',
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
          ],
        },
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/README.md',
          file_name: 'README.md',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content:
            "# Getting Started with Create React App\n\nThis project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\n\n## Available Scripts\n\nIn the project directory, you can run:\n\n### `npm start`\n\nRuns the app in the development mode.\\\nOpen [http://localhost:3000](http://localhost:3000) to view it in your browser.\n\nThe page will reload when you make changes.\\\nYou may also see any lint errors in the console.\n\n### `npm test`\n\nLaunches the test runner in the interactive watch mode.\\\nSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.\n\n### `npm run build`\n\nBuilds the app for production to the `build` folder.\\\nIt correctly bundles React in production mode and optimizes the build for the best performance.\n\nThe build is minified and the filenames include the hashes.\\\nYour app is ready to be deployed!\n\nSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.\n\n### `npm run eject`\n\n**Note: this is a one-way operation. Once you `eject`, you can't go back!**\n\nIf you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\n\nInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.\n\nYou don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.\n\n## Learn More\n\nYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\n\nTo learn React, check out the [React documentation](https://reactjs.org/).\n\n### Code Splitting\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)\n\n### Analyzing the Bundle Size\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)\n\n### Making a Progressive Web App\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)\n\n### Advanced Configuration\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)\n\n### Deployment\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)\n\n### `npm run build` fails to minify\n\nThis section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)\n",
          is_dir: false,
          sspm_matches: {
            'ABLEIST LANGUAGE': {},
            'GENDERED LANGUAGE': {},
            'VIOLENT LANGUAGE': {
              hang: [378],
            },
            'AGEIST LANGUAGE': {},
            'RACIALLY CHARGED LANGUAGE': {},
            'BIASED LANGUAGE': {},
            'MILITARY LANGUAGE': {},
            OTHER: {},
          },
        },
        {
          file_path:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
          file_name: 'src',
          parent:
            'human-centric-issue-visualiser/human-centric-issue-visualiser-main',
          content: null,
          is_dir: true,
          children: [
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/App.js',
              file_name: 'App.js',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content:
                "import './css/App.css';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport Navbar from './components/NavbarComponent';\nimport AuthenticateComponent from './components/AuthenticateComponent';\nimport { HashRouter, Routes, Route } from 'react-router-dom';\nimport OverviewComponent from './components/OverviewComponent';\nimport PrioritiseViewComponent from './components/PrioritiseViewComponent';\nimport ProgressViewComponent from './components/ProgressViewComponent';\nimport ListViewComponent from './components/ListViewComponent';\nimport ManualCorrectionViewComponent from './components/ManualCorrectionViewComponent';\nimport { useState } from 'react';\nimport * as linkStatuses from './helpers/linkStatuses';\nimport TipPopUpComponent from './components/TipPopUpComponent';\nimport * as localStorageKeys from './helpers/localStorageKeys';\nimport CleanRepoViewComponent from './components/CleanRepoViewComponent';\n\nfunction App() {\n  let initStatus = linkStatuses.unlinkedState;\n  if (\n    localStorage.getItem(localStorageKeys.ISSUES_KEY) != null &&\n    localStorage.getItem(localStorageKeys.CREDENTIALS_KEY) != null\n  ) {\n    initStatus = linkStatuses.readyState;\n  }\n  const [linkStatus, setLinkStatus] = useState(initStatus);\n\n  return (\n    <div className=\"App\">\n      <div\n        style={{ position: 'fixed', bottom: '5%', right: '5%', zIndex: '100' }}\n      >\n        <TipPopUpComponent></TipPopUpComponent>\n      </div>\n      {\n        <HashRouter>\n          <Navbar></Navbar>\n          <div className=\"content\">\n            <Routes>\n              <Route\n                path=\"/overview\"\n                element={\n                  <OverviewComponent\n                    linkStatus={linkStatus}\n                  ></OverviewComponent>\n                }\n              />\n              <Route\n                path=\"/list\"\n                element={\n                  <ListViewComponent\n                    linkStatus={linkStatus}\n                  ></ListViewComponent>\n                }\n              />\n              <Route\n                path=\"/prioritise\"\n                element={\n                  <PrioritiseViewComponent\n                    linkStatus={linkStatus}\n                  ></PrioritiseViewComponent>\n                }\n              />\n              <Route\n                path=\"/progress\"\n                element={\n                  <ProgressViewComponent\n                    linkStatus={linkStatus}\n                  ></ProgressViewComponent>\n                }\n              />\n              <Route\n                path=\"/\"\n                element={\n                  <AuthenticateComponent\n                    linkStatus={linkStatus}\n                    setLinkStatus={setLinkStatus}\n                  ></AuthenticateComponent>\n                }\n              />\n              <Route\n                path=\"/correction\"\n                element={\n                  <ManualCorrectionViewComponent\n                    linkStatus={linkStatus}\n                  ></ManualCorrectionViewComponent>\n                }\n              />\n              <Route\n                path=\"/clear\"\n                element={\n                  <CleanRepoViewComponent\n                    linkStatus={linkStatus}\n                    setLinkStatus={setLinkStatus}\n                  ></CleanRepoViewComponent>\n                }\n              />\n            </Routes>\n          </div>\n        </HashRouter>\n      }\n    </div>\n  );\n}\n\nexport default App;\n",
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
              file_name: 'components',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/AuthenticateComponent.js',
                  file_name: 'AuthenticateComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState } from 'react';\nimport { createGitHubLabels } from '../helpers/createGitHubLabels';\nimport { CREDENTIALS_KEY, ISSUES_KEY } from '../helpers/localStorageKeys';\nimport { preProcessIssues } from '../helpers/preProcessIssues';\nimport Button from 'react-bootstrap/Button';\nimport Form from 'react-bootstrap/Form';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\nimport DangerAlertComponent from './DangerAlertComponent';\n\nconst badCredentialsAlert = 'Invalid GitHub Credentials';\nconst invalidInputAlert = 'Please enter all three fields';\n\nexport default function AuthenticateComponent({ linkStatus, setLinkStatus }) {\n  // for debugging\n  setInterval(() => {}, 500);\n\n  const [credentials, setCredentials] = useState({\n    userName: null,\n    repoName: null,\n    token: null\n  });\n\n  const updateUsername = (event) => {\n    let newCred = credentials;\n    newCred.userName = event.target.value;\n    setCredentials(newCred);\n  };\n  const updateRepoName = (event) => {\n    let newCred = credentials;\n    newCred.repoName = event.target.value;\n    setCredentials(newCred);\n  };\n  const updateToken = (event) => {\n    let newCred = credentials;\n    newCred.token = event.target.value;\n    setCredentials(newCred);\n  };\n\n  const alertReady = () => {\n    setTimeout(() => {\n      setLinkStatus(linkStatuses.readyState);\n    }, 3000); // buffer for api calls. perhaps there's a better way to do this\n  };\n\n  const [credentialAlert, setCredentialAlert] = useState('');\n\n  const authenticateAndSetUp = () => {\n    if (\n      credentials.repoName == null ||\n      credentials.userName == null ||\n      credentials.token == null ||\n      credentials.repoName.length == 0 ||\n      credentials.userName.length == 0 ||\n      credentials.token.length == 0\n    ) {\n      setCredentialAlert(\n        <DangerAlertComponent\n          message={invalidInputAlert}\n        ></DangerAlertComponent>\n      );\n      return;\n    }\n\n    setLinkStatus(linkStatuses.loadingState);\n    let cachedCredentials = localStorage.getItem(CREDENTIALS_KEY);\n\n    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));\n    createGitHubLabels()\n      .then(() => {\n        preProcessIssues().then((processedIssues) => {\n          console.log('This in LS', processedIssues); // could local storage be set here???\n          localStorage.setItem(ISSUES_KEY, JSON.stringify(processedIssues));\n          alertReady();\n        });\n        setCredentialAlert('');\n      })\n      .catch((e) => {\n        console.log(e);\n        // bug-proofind for when invalid credentials are inputted\n        setLinkStatus(linkStatuses.unlinkedState);\n        if (cachedCredentials != null) {\n          localStorage.setItem(CREDENTIALS_KEY, cachedCredentials); // restore previous credentials\n        }\n        setCredentialAlert(\n          <DangerAlertComponent\n            message={badCredentialsAlert}\n          ></DangerAlertComponent>\n        );\n      });\n  };\n\n  return (\n    <div>\n      <br></br>\n      <Form>\n        <Form.Group className=\"mb-3\" controlId=\"formBasicEmail\">\n          <Form.Label style={{ fontSize: '16px' }}>\n            GitHub Repository Name\n          </Form.Label>\n          <br></br>\n          <input\n            style={{ width: '30%' }}\n            type=\"text\"\n            onChange={updateRepoName}\n            placeholder=\"Enter GitHub Repository Name\"\n          ></input>\n        </Form.Group>\n\n        <Form.Group className=\"mb-3\" controlId=\"formBasicEmail\">\n          <Form.Label style={{ fontSize: '16px' }}>\n            GitHub Repository Contributor Username\n          </Form.Label>\n          <br></br>\n          <input\n            style={{ width: '30%' }}\n            type=\"text\"\n            onChange={updateUsername}\n            placeholder=\"Enter GitHub Username of a Repository Contributor\"\n          ></input>\n        </Form.Group>\n\n        <Form.Group className=\"mb-3\" controlId=\"formBasicPassword\">\n          <Form.Label style={{ fontSize: '16px' }}>\n            GitHub Access Token\n          </Form.Label>\n          <br></br>\n          <input\n            style={{ width: '30%' }}\n            type=\"password\"\n            placeholder=\"Enter GitHub Access Token\"\n            onChange={updateToken}\n          ></input>\n          <br></br>\n          <Form.Label>\n            Go to Github{'>'}Settings{'>'}Developer settings{'>'}Personal access\n            tokens{'>'}Generate new token{'>'}Generate token\n          </Form.Label>\n          <br></br>\n          <Form.Label>Ensure to check the 'repo' scope</Form.Label>\n        </Form.Group>\n        <Button\n          variant=\"outline-secondary\"\n          // type=\"submit\"\n          onClick={() => {\n            authenticateAndSetUp();\n          }}\n        >\n          Link to Repository\n        </Button>\n      </Form>\n\n      <br></br>\n      <div>{credentialAlert}</div>\n\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n      {linkStatus == linkStatuses.readyState && (\n        <h5>\n          Successfully linked to{' '}\n          {JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}!\n        </h5>\n      )}\n    </div>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hang: [3357, 3783, 4270],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                  file_name: 'chartComponents',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content: null,
                  is_dir: true,
                  children: [
                    {
                      file_path:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents/2203.12212.pdf',
                      file_name: '2203.12212.pdf',
                      parent:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                      content:
                        'WARNING: File type not currently supported - contents no analysed.',
                      is_dir: false,
                    },
                    {
                      file_path:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents/HorizontalBarChartComponent.js',
                      file_name: 'HorizontalBarChartComponent.js',
                      parent:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                      content:
                        "import React from 'react';\nimport {\n  Chart as ChartJS,\n  CategoryScale,\n  LinearScale,\n  BarElement,\n  Title,\n  Tooltip,\n  Legend\n} from 'chart.js';\nimport { Bar } from 'react-chartjs-2';\nimport * as repoLabels from '../../helpers/labels';\nimport { CREDENTIALS_KEY, ISSUES_KEY } from '../../helpers/localStorageKeys';\nimport { defaultGrey } from '../../theme/hexCodes';\n\nexport default function HorizontalBarChartComponent() {\n  ChartJS.register(\n    CategoryScale,\n    LinearScale,\n    BarElement,\n    Title,\n    Tooltip,\n    Legend\n  );\n  const options = {\n    scales: {\n      xAxis: {\n        ticks: {\n          precision: 0,\n          font: {\n            size: 16\n          }\n        },\n        title: {\n          display: true,\n          text: 'Number of Issues',\n          font: {\n            size: 24\n          }\n        }\n      },\n      yAxis: {\n        title: {\n          display: true,\n          text: 'Issue Status',\n          font: {\n            size: 24\n          }\n        }\n      }\n    },\n    indexAxis: 'y',\n    elements: {\n      bar: {\n        borderWidth: 2\n      }\n    },\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'right'\n      },\n      title: {\n        display: true,\n        text: 'Issue Progress Overview',\n        font: {\n          size: 24\n        }\n      }\n    }\n  };\n\n  const hexToRgb = (hex, opacity) => {\n    var bigint = parseInt(hex, 16);\n    var r = (bigint >> 16) & 255;\n    var g = (bigint >> 8) & 255;\n    var b = bigint & 255;\n\n    return 'rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';\n  };\n\n  const labels = [\n    'Unassigned Status',\n    repoLabels.unresolvedHCILabel.name,\n    repoLabels.resolvingHCILabel.name,\n    repoLabels.resolvedHCILabel.name\n  ];\n\n  const getProgressCount = () => {\n    return [\n      getCount(null),\n      getCount(repoLabels.unresolvedHCILabel.name),\n      getCount(repoLabels.resolvingHCILabel.name),\n      getCount(repoLabels.resolvedHCILabel.name)\n    ];\n  };\n\n  const getCount = (labelName) => {\n    let count = 0;\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    issues.forEach((issue) => {\n      if (issue.progressTag.name == labelName) {\n        count += 1;\n      }\n    });\n    return count;\n  };\n\n  const data = {\n    labels,\n    datasets: [\n      {\n        label:\n          'Issues in ' +\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n        data: getProgressCount(),\n        borderColor: 'white',\n        backgroundColor: [\n          `#${defaultGrey}`,\n          hexToRgb(repoLabels.unresolvedHCILabel.color, 0.7),\n          hexToRgb(repoLabels.resolvingHCILabel.color, 0.7),\n          hexToRgb(repoLabels.resolvedHCILabel.color, 0.7)\n        ]\n      }\n    ]\n  };\n  return (\n    <div style={{ width: '70%' }}>\n      <Bar options={options} data={data}></Bar>\n    </div>\n  );\n}\n",
                      is_dir: false,
                      sspm_matches: {
                        'ABLEIST LANGUAGE': {},
                        'GENDERED LANGUAGE': {},
                        'VIOLENT LANGUAGE': {
                          hit: [2449],
                        },
                        'AGEIST LANGUAGE': {},
                        'RACIALLY CHARGED LANGUAGE': {},
                        'BIASED LANGUAGE': {},
                        'MILITARY LANGUAGE': {},
                        OTHER: {},
                      },
                    },
                    {
                      file_path:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents/PolarAreaChartComponent.js',
                      file_name: 'PolarAreaChartComponent.js',
                      parent:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                      content:
                        "import React, { useState, useEffect } from 'react';\nimport {\n  Chart as ChartJS,\n  RadialLinearScale,\n  ArcElement,\n  Tooltip,\n  Legend\n} from 'chart.js';\nimport { PolarArea } from 'react-chartjs-2';\nimport * as repoLabels from '../../helpers/labels';\nimport { ISSUES_KEY } from '../../helpers/localStorageKeys';\n\nexport default function PolarAreaChartComponent() {\n  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);\n\n  const hexToRgb = (hex) => {\n    const bigint = parseInt(hex, 16);\n    const r = (bigint >> 16) & 255;\n    const g = (bigint >> 8) & 255;\n    const b = bigint & 255;\n\n    return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5)';\n  };\n\n  const getHCICount = () => {\n    return [\n      getCount(repoLabels.noHCIIdentifiedLabel.name),\n      getCount(repoLabels.appUsageLabel.name),\n      getCount(repoLabels.inclusivenessLabel.name),\n      getCount(repoLabels.userReactionLabel.name)\n    ];\n  };\n\n  const getCount = (labelName) => {\n    let count = 0;\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    issues.forEach((issue) => {\n      if (\n        issue.HCILabels.map((label) => {\n          return label.name;\n        }).includes(labelName)\n      ) {\n        count += 1;\n      }\n    });\n    return count;\n  };\n\n  const [data, setData] = useState({\n    labels: [\n      repoLabels.noHCIIdentifiedLabel.name,\n      repoLabels.appUsageLabel.name,\n      repoLabels.inclusivenessLabel.name,\n      repoLabels.userReactionLabel.name\n    ],\n    datasets: [\n      {\n        label: 'Distribution of HCI Categories',\n        data: getHCICount(),\n        backgroundColor: [\n          hexToRgb(repoLabels.noHCIIdentifiedLabel.color),\n          hexToRgb(repoLabels.appUsageLabel.color),\n          hexToRgb(repoLabels.inclusivenessLabel.color),\n          hexToRgb(repoLabels.userReactionLabel.color)\n        ],\n        borderWidth: 1\n      }\n    ]\n  });\n\n  useEffect(() => {\n    const interval = setInterval(\n      () =>\n        setData({\n          labels: [\n            repoLabels.noHCIIdentifiedLabel.name,\n            repoLabels.appUsageLabel.name,\n            repoLabels.inclusivenessLabel.name,\n            repoLabels.userReactionLabel.name\n          ],\n          datasets: [\n            {\n              label: 'Distribution of HCI Categories',\n              data: getHCICount(),\n              backgroundColor: [\n                hexToRgb(repoLabels.noHCIIdentifiedLabel.color),\n                hexToRgb(repoLabels.appUsageLabel.color),\n                hexToRgb(repoLabels.inclusivenessLabel.color),\n                hexToRgb(repoLabels.userReactionLabel.color)\n              ],\n              borderWidth: 1\n            }\n          ]\n        }),\n      1000\n    );\n    return () => {\n      clearInterval(interval);\n    };\n  }, []);\n\n  const options = {\n    plugins: {\n      title: {\n        display: true,\n        text: 'HCI Categorisation Count',\n        font: {\n          size: 24\n        }\n      }\n    },\n    scales: {\n      r: {\n        ticks: {\n          precision: 0,\n          font: {\n            size: 16\n          }\n        }\n      }\n    }\n  };\n  return (\n    <div style={{ width: '50%' }}>\n      <PolarArea data={data} options={options}></PolarArea>\n    </div>\n  );\n}\n",
                      is_dir: false,
                      sspm_matches: {
                        'ABLEIST LANGUAGE': {},
                        'GENDERED LANGUAGE': {},
                        'VIOLENT LANGUAGE': {},
                        'AGEIST LANGUAGE': {},
                        'RACIALLY CHARGED LANGUAGE': {},
                        'BIASED LANGUAGE': {},
                        'MILITARY LANGUAGE': {},
                        OTHER: {},
                      },
                    },
                    {
                      file_path:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents/PriorityBarChartComponent.js',
                      file_name: 'PriorityBarChartComponent.js',
                      parent:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                      content:
                        "import React from 'react';\nimport {\n  Chart as ChartJS,\n  CategoryScale,\n  LinearScale,\n  BarElement,\n  Title,\n  Tooltip\n} from 'chart.js';\nimport { Bar } from 'react-chartjs-2';\nimport * as repoLabels from '../../helpers/labels';\nimport { ISSUES_KEY } from '../../helpers/localStorageKeys';\nimport { defaultGrey } from '../../theme/hexCodes';\n\nexport default function PriorityBarChartComponent() {\n  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);\n  const options = {\n    scales: {\n      yAxis: {\n        ticks: {\n          precision: 0,\n          font: {\n            size: 16\n          }\n        },\n        title: {\n          display: true,\n          text: 'Number of Issues',\n          font: {\n            size: 24\n          }\n        }\n      },\n      xAxis: {\n        title: {\n          display: true,\n          text: 'Issue Priority',\n          font: {\n            size: 24\n          }\n        }\n      }\n    },\n    indexAxis: 'x',\n    elements: {\n      bar: {\n        borderWidth: 2\n      }\n    },\n    responsive: true,\n    plugins: {\n      legend: {\n        display: false\n      },\n      title: {\n        display: true,\n        text: 'Issue Priority Overview',\n        font: {\n          size: 24\n        }\n      }\n    }\n  };\n\n  const hexToRgb = (hex, opacity) => {\n    var bigint = parseInt(hex, 16);\n    var r = (bigint >> 16) & 255;\n    var g = (bigint >> 8) & 255;\n    var b = bigint & 255;\n\n    return 'rgba(' + r + ', ' + g + ', ' + b + ',' + opacity + ')';\n  };\n\n  const labels = [\n    'Unassigned Status',\n    repoLabels.lowPriorityLabel.name,\n    repoLabels.mediumPriorityLabel.name,\n    repoLabels.highPriorityLabel.name\n  ];\n\n  const getProgressCount = () => {\n    return [\n      getCount(null),\n      getCount(repoLabels.lowPriorityLabel.name),\n      getCount(repoLabels.mediumPriorityLabel.name),\n      getCount(repoLabels.highPriorityLabel.name)\n    ];\n  };\n\n  const getCount = (labelName) => {\n    let count = 0;\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    issues.forEach((issue) => {\n      if (issue.priority.name == labelName) {\n        count += 1;\n      }\n    });\n    return count;\n  };\n\n  const data = {\n    labels,\n    datasets: [\n      {\n        data: getProgressCount(),\n        borderColor: `#${defaultGrey}`,\n        backgroundColor: [\n          `#${defaultGrey}`,\n          hexToRgb(repoLabels.lowPriorityLabel.color, 1),\n          hexToRgb(repoLabels.mediumPriorityLabel.color, 1),\n          hexToRgb(repoLabels.highPriorityLabel.color, 1)\n        ]\n      }\n    ]\n  };\n  return (\n    <div style={{ width: '70%' }}>\n      <Bar options={options} data={data}></Bar>\n    </div>\n  );\n}\n",
                      is_dir: false,
                      sspm_matches: {
                        'ABLEIST LANGUAGE': {},
                        'GENDERED LANGUAGE': {},
                        'VIOLENT LANGUAGE': {},
                        'AGEIST LANGUAGE': {},
                        'RACIALLY CHARGED LANGUAGE': {},
                        'BIASED LANGUAGE': {},
                        'MILITARY LANGUAGE': {},
                        OTHER: {},
                      },
                    },
                    {
                      file_path:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents/StackedBarChartComponent.js',
                      file_name: 'StackedBarChartComponent.js',
                      parent:
                        'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/chartComponents',
                      content:
                        "import React, { useState, useEffect } from 'react';\nimport {\n  Chart as ChartJS,\n  CategoryScale,\n  LinearScale,\n  BarElement,\n  Title,\n  Tooltip,\n  Legend\n} from 'chart.js';\nimport { Bar } from 'react-chartjs-2';\nimport * as repoLabels from '../../helpers/labels';\nimport { ISSUES_KEY } from '../../helpers/localStorageKeys';\n\nexport default function StackedBarChartComponent() {\n  ChartJS.register(\n    CategoryScale,\n    LinearScale,\n    BarElement,\n    Title,\n    Tooltip,\n    Legend\n  );\n\n  const options = {\n    plugins: {\n      title: {\n        display: true,\n        text: 'HCIs Against Time',\n        font: {\n          size: 24\n        }\n      }\n    },\n    responsive: true,\n\n    scales: {\n      x: {\n        stacked: true,\n        ticks: {\n          precision: 0,\n          font: {\n            size: 16\n          }\n        },\n        title: {\n          display: true,\n          text: 'Date',\n          font: {\n            size: 24\n          }\n        }\n      },\n      y: {\n        stacked: true,\n        ticks: {\n          precision: 0\n        },\n        title: {\n          display: true,\n          text: 'Number of Issues',\n          font: {\n            size: 24\n          }\n        }\n      }\n    }\n  };\n\n  const hexToRgb = (hex) => {\n    const bigint = parseInt(hex, 16);\n    const r = (bigint >> 16) & 255;\n    const g = (bigint >> 8) & 255;\n    const b = bigint & 255;\n\n    return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5)';\n  };\n\n  const getDatesInRange = (startDate, endDate) => {\n    endDate.setDate(endDate.getDate() + 1);\n    const date = new Date(startDate.getTime());\n    const dates = [];\n\n    while (date <= endDate) {\n      dates.push(new Date(date));\n      date.setDate(date.getDate() + 1);\n    }\n\n    return dates;\n  };\n\n  const generateDates = () => {\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    const issueDates = issues.map((issue) => {\n      return new Date(issue.created_at);\n    });\n    // sort in ascending order\n    issueDates.sort((first, second) => {\n      return first.getTime() - second.getTime();\n    });\n    // get earliest and latest dates\n    const earliestDate = issueDates[0];\n    const latestDate = issueDates[issueDates.length - 1];\n    return getDatesInRange(earliestDate, latestDate);\n  };\n\n  const getCount = (HCILabel, dates) => {\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n\n    return dates.map((date) => {\n      let count = 0;\n      issues.forEach((issue) => {\n        if (\n          date.toDateString() == new Date(issue.created_at).toDateString() &&\n          issue.HCILabels.map((label) => {\n            return label.name;\n          }).includes(HCILabel)\n        ) {\n          count++;\n        }\n      });\n      return count;\n    });\n  };\n\n  const dates = generateDates();\n  const labels = dates.map((date) => {\n    return date.toDateString();\n  });\n\n  const [data, setData] = useState({\n    labels: labels,\n    datasets: [\n      {\n        label: repoLabels.noHCIIdentifiedLabel.name,\n        data: getCount(repoLabels.noHCIIdentifiedLabel.name, dates),\n        backgroundColor: hexToRgb(repoLabels.noHCIIdentifiedLabel.color)\n      },\n      {\n        label: repoLabels.appUsageLabel.name,\n        data: getCount(repoLabels.appUsageLabel.name, dates),\n        backgroundColor: hexToRgb(repoLabels.appUsageLabel.color)\n      },\n      {\n        label: repoLabels.inclusivenessLabel.name,\n        data: getCount(repoLabels.inclusivenessLabel.name, dates),\n        backgroundColor: hexToRgb(repoLabels.inclusivenessLabel.color)\n      },\n      {\n        label: repoLabels.userReactionLabel.name,\n        data: getCount(repoLabels.userReactionLabel.name, dates),\n        backgroundColor: hexToRgb(repoLabels.userReactionLabel.color)\n      }\n    ]\n  });\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      const dates = generateDates();\n      const labels = dates.map((date) => {\n        return date.toDateString();\n      });\n\n      setData({\n        labels: labels,\n        datasets: [\n          {\n            label: repoLabels.noHCIIdentifiedLabel.name,\n            data: getCount(repoLabels.noHCIIdentifiedLabel.name, dates),\n            backgroundColor: hexToRgb(repoLabels.noHCIIdentifiedLabel.color)\n          },\n          {\n            label: repoLabels.appUsageLabel.name,\n            data: getCount(repoLabels.appUsageLabel.name, dates),\n            backgroundColor: hexToRgb(repoLabels.appUsageLabel.color)\n          },\n          {\n            label: repoLabels.inclusivenessLabel.name,\n            data: getCount(repoLabels.inclusivenessLabel.name, dates),\n            backgroundColor: hexToRgb(repoLabels.inclusivenessLabel.color)\n          },\n          {\n            label: repoLabels.userReactionLabel.name,\n            data: getCount(repoLabels.userReactionLabel.name, dates),\n            backgroundColor: hexToRgb(repoLabels.userReactionLabel.color)\n          }\n        ]\n      });\n    }, 1000);\n    return () => {\n      clearInterval(interval);\n    };\n  }, []);\n\n  return <Bar options={options} data={data} />;\n}\n",
                      is_dir: false,
                      sspm_matches: {
                        'ABLEIST LANGUAGE': {},
                        'GENDERED LANGUAGE': {},
                        'VIOLENT LANGUAGE': {},
                        'AGEIST LANGUAGE': {},
                        'RACIALLY CHARGED LANGUAGE': {},
                        'BIASED LANGUAGE': {},
                        'MILITARY LANGUAGE': {},
                        OTHER: {},
                      },
                    },
                  ],
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/CleanRepoViewComponent.js',
                  file_name: 'CleanRepoViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport { cleanRepo } from '../helpers/cleanRepo';\nimport Button from 'react-bootstrap/Button';\nimport { CREDENTIALS_KEY } from '../helpers/localStorageKeys';\n\nexport default function CleanRepoViewComponent({ linkStatus, setLinkStatus }) {\n  const purgeRepo = async () => {\n    setLinkStatus(linkStatuses.unlinkedState);\n    cleanRepo();\n    return;\n  };\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <p>\n            Clicking this button will remove all labels added to the issues in\n            the GitHub repository by this app, and will delete said labels from\n            the repo entirely.\n            <br></br>\n            You can use this app with the repository again by simply entering\n            the repo's credentials again.\n          </p>\n          <Button\n            variant=\"outline-danger\"\n            onClick={async () => {\n              purgeRepo();\n            }}\n          >\n            Undo Changes to{' '}\n            {JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}\n          </Button>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hang: [1427],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/CorrectionIssueComponent.js',
                  file_name: 'CorrectionIssueComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport * as uuid from 'uuid';\nimport * as repoLabels from '../helpers/labels';\nimport { removeGitHubLabel } from '../helpers/removeGitHubLabel';\nimport { addGitHubLabels } from '../helpers/addGitHubLabels';\nimport { accentColour, mainTheme } from '../theme/hexCodes';\n\nimport Card from 'react-bootstrap/Card';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\n\nconst allHCILabels = [\n  repoLabels.appUsageLabel,\n  repoLabels.inclusivenessLabel,\n  repoLabels.userReactionLabel\n];\n\nexport default function CorrectionIssueComponent({ issue, setIssues }) {\n  const updateLocalStorage = (updatedHCILabels) => {\n    // update issues in local storage and trigger re-render\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    // access current issue, remove its previous label\n    const updatedIssues = issues.map((anIssue) => {\n      if (anIssue.number == issue.number) {\n        anIssue.HCILabels = updatedHCILabels;\n      }\n      return anIssue;\n    });\n\n    localStorage.setItem(ISSUES_KEY, JSON.stringify(updatedIssues));\n    setIssues(updatedIssues);\n  };\n\n  const addTag = (HCILabel) => {\n    addGitHubLabels(issue.number, [HCILabel.name]);\n    if (\n      issue.HCILabels.map((label) => label.name).includes(\n        repoLabels.noHCIIdentifiedLabel.name\n      )\n    ) {\n      removeGitHubLabel(issue.number, repoLabels.noHCIIdentifiedLabel.name);\n      issue.HCILabels = [];\n    }\n    issue.HCILabels.push(HCILabel);\n    updateLocalStorage(issue.HCILabels);\n  };\n\n  const removeTag = (HCILabel) => {\n    removeGitHubLabel(issue.number, HCILabel.name);\n    issue.HCILabels = issue.HCILabels.filter(\n      (label) => label.name != HCILabel.name\n    );\n    if (issue.HCILabels.length == 0) {\n      addGitHubLabels(issue.number, [repoLabels.noHCIIdentifiedLabel.name]);\n      issue.HCILabels.push(repoLabels.noHCIIdentifiedLabel);\n    }\n    updateLocalStorage(issue.HCILabels);\n  };\n  return (\n    <>\n      <Card border=\"secondary\">\n        <Card.Header\n          style={{ backgroundColor: '#' + issue.priority.color + '70' }}\n        >\n          {issue.priority.name && <div>{issue.priority.name}</div>}\n          {!issue.priority.name && <></>}\n        </Card.Header>\n        <Card.Body>\n          <a href={issue.html_url} style={{ color: 'black' }}>\n            <Card.Title>{issue.title}</Card.Title>\n          </a>\n          {issue.body}\n          <br></br>\n          Raised by {issue.fluffedAuthor}, {issue.created_at.slice(0, 10)}\n          <br></br>\n          <br></br>\n          <div\n            style={{\n              border: `2px solid #${accentColour}70`,\n              borderRadius: '20px'\n            }}\n          >\n            <h5>Click to unassign from this issue:</h5>\n            <div style={{ justifyContent: 'center', display: 'flex' }}>\n              {issue.HCILabels.filter(\n                (label) => label.name != repoLabels.noHCIIdentifiedLabel.name\n              ).map((HCILabel) => {\n                return (\n                  <button\n                    style={{\n                      margin: '10px',\n                      width: '20%',\n                      borderRadius: '20px',\n                      borderWidth: '0',\n                      backgroundColor: '#' + HCILabel.color + '80' // change opacity\n                    }}\n                    key={uuid.v4()}\n                    onClick={() => removeTag(HCILabel)}\n                  >\n                    {HCILabel.name}\n                  </button>\n                );\n              })}\n            </div>\n          </div>\n          <br></br>\n          <div\n            style={{ border: `2px solid #${mainTheme}`, borderRadius: '20px' }}\n          >\n            <h5>Click to assign to this issue:</h5>\n            <div style={{ justifyContent: 'center', display: 'flex' }}>\n              {allHCILabels\n                .filter(\n                  (HCILabel) =>\n                    !issue.HCILabels.map((label) => {\n                      return label.name;\n                    }).includes(HCILabel.name)\n                )\n                .map((HCILabel) => {\n                  return (\n                    <button\n                      style={{\n                        margin: '10px',\n                        width: '20%',\n                        borderRadius: '20px',\n                        borderWidth: '0',\n                        backgroundColor: '#' + HCILabel.color + '80' // change opacity\n                      }}\n                      key={uuid.v4()}\n                      onClick={() => addTag(HCILabel)}\n                    >\n                      {HCILabel.name}\n                    </button>\n                  );\n                })}\n            </div>\n          </div>\n        </Card.Body>\n      </Card>\n      <br></br>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hang: [3291, 4435],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/DangerAlertComponent.js',
                  file_name: 'DangerAlertComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport Alert from 'react-bootstrap/Alert';\n\nexport default function DangerAlertComponent({ message }) {\n  return (\n    <div style={{ display: 'flex', justifyContent: 'center' }}>\n      <Alert variant={'danger'} style={{ width: '50%' }}>\n        {message}\n      </Alert>\n    </div>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/FilterBarComponent.js',
                  file_name: 'FilterBarComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import Multiselect from 'multiselect-react-dropdown';\nimport React from 'react';\nimport * as repoLabels from '../helpers/labels';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\n\nconst HCIType = 'HCI';\nconst statusType = 'status';\nconst priorityType = 'priority';\n\nconst unassignedStatusName = 'Unassigned Status';\nconst unassignedStatusValue = null;\nconst unassignedPriorityName = 'Unassigned Priority';\nconst unassignedPriorityValue = null;\n\nexport default function FilterBarComponent({ setIssues }) {\n  const options = [\n    {\n      name: repoLabels.noHCIIdentifiedLabel.name,\n      type: HCIType,\n      value: repoLabels.noHCIIdentifiedLabel.name\n    },\n    {\n      name: repoLabels.appUsageLabel.name,\n      type: HCIType,\n      value: repoLabels.appUsageLabel.name\n    },\n    {\n      name: repoLabels.inclusivenessLabel.name,\n      type: HCIType,\n      value: repoLabels.inclusivenessLabel.name\n    },\n    {\n      name: repoLabels.userReactionLabel.name,\n      type: HCIType,\n      value: repoLabels.userReactionLabel.name\n    },\n    {\n      name: unassignedStatusName,\n      type: statusType,\n      value: unassignedStatusValue\n    },\n    {\n      name: repoLabels.unresolvedHCILabel.name,\n      type: statusType,\n      value: repoLabels.unresolvedHCILabel.name\n    },\n    {\n      name: repoLabels.resolvingHCILabel.name,\n      type: statusType,\n      value: repoLabels.resolvingHCILabel.name\n    },\n    {\n      name: repoLabels.resolvedHCILabel.name,\n      type: statusType,\n      value: repoLabels.resolvedHCILabel.name\n    },\n    {\n      name: unassignedPriorityName,\n      type: priorityType,\n      value: unassignedPriorityValue\n    },\n    {\n      name: repoLabels.lowPriorityLabel.name,\n      type: priorityType,\n      value: repoLabels.lowPriorityLabel.name\n    },\n    {\n      name: repoLabels.mediumPriorityLabel.name,\n      type: priorityType,\n      value: repoLabels.mediumPriorityLabel.name\n    },\n    {\n      name: repoLabels.highPriorityLabel.name,\n      type: priorityType,\n      value: repoLabels.highPriorityLabel.name\n    }\n  ];\n\n  const updateSelected = (selectedList, selectedOption) => {\n    if (selectedList.length == 0) {\n      setIssues(JSON.parse(localStorage.getItem(ISSUES_KEY)));\n      return;\n    } else {\n      const newIssues = JSON.parse(localStorage.getItem(ISSUES_KEY)).filter(\n        (issue) => {\n          // iterate over each selected option, return true if issue meets the criteria\n          for (let i = 0; i < selectedList.length; i++) {\n            if (selectedList[i].type == HCIType) {\n              if (\n                issue.HCILabels.map((label) => {\n                  return label.name;\n                }).includes(selectedList[i].value)\n              ) {\n                return true;\n              }\n            } else if (selectedList[i].type == statusType) {\n              if (issue.progressTag.name == selectedList[i].value) {\n                return true;\n              }\n            } else if (selectedList[i].type == priorityType) {\n              if (issue.priority.name == selectedList[i].value) {\n                return true;\n              }\n            }\n          }\n          return false;\n        }\n      );\n      setIssues(newIssues);\n    }\n  };\n\n  return (\n    <>\n      <Multiselect\n        options={options} // Options to display in the dropdown\n        selectedValues={[]} // Preselected value to persist in dropdown\n        onSelect={updateSelected} // Function will trigger on select event\n        onRemove={updateSelected} // Function will trigger on remove event\n        displayValue=\"name\" // Property name to display in the dropdown options\n        showCheckbox={true}\n        placeholder=\"Filter issues by...\"\n        avoidHighlightFirstOption={true}\n        showArrow={true}\n        style={{\n          chips: {\n            background: '#9AC7BF'\n          },\n          option: {\n            backgroundColor: 'white',\n            color: 'black'\n          }\n        }}\n      ></Multiselect>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hit: [3895],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/IssueComponent.js',
                  file_name: 'IssueComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport * as uuid from 'uuid';\n\nimport Card from 'react-bootstrap/Card';\nimport Button from 'react-bootstrap/Button';\n\nexport default function IssueComponent({ issue }) {\n  const [comments, setComments] = useState([]);\n\n  const getComments = async () => {\n    setComments(issue.cached_comments);\n  };\n\n  useEffect(() => {\n    getComments();\n  }, []);\n\n  const [showComments, setShowComments] = useState(false);\n\n  const toggleShowComments = () => {\n    setShowComments(!showComments);\n  };\n\n  return (\n    <>\n      <Card border=\"secondary\">\n        <Card.Header\n          style={{ backgroundColor: '#' + issue.priority.color + '70' }}\n        >\n          {issue.priority.name && <div>{issue.priority.name}</div>}\n          {!issue.priority.name && <></>}\n        </Card.Header>\n\n        <Card.Body>\n          <a href={issue.html_url} style={{ color: 'black' }}>\n            <Card.Title>{issue.title}</Card.Title>\n          </a>\n          {issue.body}\n          <div style={{ display: 'flex', justifyContent: 'center' }}>\n            {issue.bodyHCILabels.map((label) => {\n              return (\n                <div\n                  style={{\n                    borderRadius: '100%',\n                    height: '4vh',\n                    width: '4vh',\n                    borderColor: 'grey',\n                    padding: '10px',\n                    margin: '0.2%',\n                    backgroundColor: '#' + label.color + '80'\n                  }}\n                  key={uuid.v4()}\n                ></div>\n              );\n            })}\n          </div>\n          <br></br>\n          Raised by {issue.fluffedAuthor}, {issue.created_at.slice(0, 10)}\n          <br></br>\n          HCIs:\n          <div style={{ justifyContent: 'center', display: 'flex' }}>\n            {issue.HCILabels.map((HCILabel) => {\n              return (\n                <div\n                  style={{\n                    margin: '10px',\n                    width: '20%',\n                    borderRadius: '20px',\n                    backgroundColor: '#' + HCILabel.color + '80' // change opacity\n                  }}\n                  key={uuid.v4()}\n                >\n                  {HCILabel.name}\n                </div>\n              );\n            })}\n          </div>\n          <Button variant=\"outline-secondary\" onClick={toggleShowComments}>\n            Comments\n          </Button>\n          {showComments ? (\n            comments.length == 0 ? (\n              <div>There are no comments under this issue</div>\n            ) : (\n              comments.map((comment) => {\n                return (\n                  <div>\n                    <br></br>\n                    <div style={{ justifyContent: 'center', display: 'flex' }}>\n                      <Card border=\"secondary\" style={{ width: '70%' }}>\n                        <Card.Body>\n                          <Card.Text>{comment.body}</Card.Text>\n                          <div\n                            style={{\n                              display: 'flex',\n                              justifyContent: 'center'\n                            }}\n                          >\n                            {comment.HCILabels.map((label) => {\n                              return (\n                                <div\n                                  style={{\n                                    borderRadius: '100%',\n                                    height: '4vh',\n                                    width: '4vh',\n                                    padding: '10px',\n                                    margin: '0.2%',\n                                    backgroundColor: '#' + label.color + '80'\n                                  }}\n                                ></div>\n                              );\n                            })}\n                          </div>\n                          By: {comment.user.login} on{' '}\n                          {comment.created_at.slice(0, 10)}\n                        </Card.Body>\n                      </Card>\n                    </div>\n                  </div>\n                );\n              })\n            )\n          ) : null}\n        </Card.Body>\n      </Card>\n      <br></br>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hang: [2111],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/IssueList.js',
                  file_name: 'IssueList.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import IssueComponent from './IssueComponent';\nimport * as uuid from 'uuid';\n\nexport default function IssueList({ issues }) {\n  return (\n    <>\n      <div\n        style={{\n          textAlign: 'center',\n          paddingLeft: '20%',\n          paddingRight: '20%'\n        }}\n      >\n        {issues.map((issue) => {\n          return (\n            <>\n              <IssueComponent issue={issue} key={uuid.v4()}></IssueComponent>\n            </>\n          );\n        })}\n      </div>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/ListViewComponent.js',
                  file_name: 'ListViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\nimport FilterBarComponent from './FilterBarComponent';\nimport IssueList from './IssueList';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\n\nexport default function ListViewComponent({ linkStatus }) {\n  const [issues, setIssues] = useState([]);\n\n  const getIssues = async () => {\n    setIssues(JSON.parse(localStorage.getItem(ISSUES_KEY)));\n  };\n\n  useEffect(() => {\n    getIssues();\n  }, []);\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <FilterBarComponent setIssues={setIssues}></FilterBarComponent>\n          <p></p>\n          <IssueList issues={issues}></IssueList>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/LoadingDefaultViewComponent.js',
                  file_name: 'LoadingDefaultViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport Spinner from 'react-bootstrap/Spinner';\nimport Button from 'react-bootstrap/Button';\nimport { mainTheme } from '../theme/hexCodes';\n\nexport default function LoadingDefaultViewComponent() {\n  return (\n    <>\n      <br></br>\n      <br></br>\n      <Button\n        variant=\"primary\"\n        style={{\n          backgroundColor: `#${mainTheme}`,\n          borderWidth: '0px',\n          color: 'black',\n          fontSize: '20px',\n          padding: '10px'\n        }}\n        disabled\n      >\n        <Spinner\n          as=\"span\"\n          animation=\"border\"\n          size=\"sm\"\n          role=\"status\"\n          aria-hidden=\"true\"\n        />\n        <div>Linking to GitHub...</div>\n      </Button>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {
                      disabled: [503],
                    },
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/ManualCorrectionViewComponent.js',
                  file_name: 'ManualCorrectionViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\nimport CorrectionIssueComponent from './CorrectionIssueComponent';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\n\nexport default function ManualCorrectionViewComponent({ linkStatus }) {\n  const [issues, setIssues] = useState([]);\n\n  const getIssues = async () => {\n    setIssues(JSON.parse(localStorage.getItem(ISSUES_KEY)));\n  };\n\n  useEffect(() => {\n    getIssues();\n  }, []);\n\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <div\n            style={{\n              textAlign: 'center',\n              paddingLeft: '20%',\n              paddingRight: '20%'\n            }}\n          >\n            {issues.map((issue) => {\n              return (\n                <CorrectionIssueComponent\n                  issue={issue}\n                  setIssues={setIssues}\n                ></CorrectionIssueComponent>\n              );\n            })}\n          </div>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/NavbarComponent.js',
                  file_name: 'NavbarComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport { NavLink } from 'react-router-dom';\n\nimport Container from 'react-bootstrap/Container';\nimport Row from 'react-bootstrap/Row';\nimport Col from 'react-bootstrap/Col';\nimport { mainTheme } from '../theme/hexCodes';\nimport logo from '../logos/logo.png';\n\nexport default function NavbarComponent() {\n  return (\n    <div\n      style={{\n        borderBottom: '2px solid lightgrey',\n        height: 'fit-content',\n        padding: '2vh',\n        marginBottom: '10px',\n        backgroundColor: `#${mainTheme}`\n      }}\n    >\n      <Container style={{ paddingLeft: '0px' }}>\n        <Row>\n          <Col>\n            <img src={logo} style={{ height: '15vh' }}></img>\n          </Col>\n          <Col>\n            <NavLink\n              exact=\"true\"\n              to=\"/\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Link Repo\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/overview\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Overview\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/list\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              List\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/prioritise\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Prioritise\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/progress\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Progress\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/correction\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Correction Tool\n            </NavLink>\n          </Col>\n          <Col>\n            <NavLink\n              to=\"/clear\"\n              style={({ isActive }) =>\n                isActive\n                  ? {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '16px',\n                      fontWeight: 'bold'\n                    }\n                  : {\n                      textDecoration: 'none',\n                      color: 'black',\n                      fontSize: '12px'\n                    }\n              }\n            >\n              Reset Repo\n            </NavLink>\n          </Col>\n        </Row>\n      </Container>\n    </div>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/OverviewComponent.js',
                  file_name: 'OverviewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport HorizontalBarChartComponent from './chartComponents/HorizontalBarChartComponent';\nimport PolarAreaChartComponent from './chartComponents/PolarAreaChartComponent';\nimport PriorityBarChartComponent from './chartComponents/PriorityBarChartComponent';\nimport StackedBarChartComponent from './chartComponents/StackedBarChartComponent';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\n\nexport default function OverviewComponent({ linkStatus }) {\n  const polarChartDescription =\n    'This chart provides a visualisation of the relative amounts of different Human Centric Issues identified in the GitHub repository. The colours correspond to the different Human Centric Issue categories, while the radius corresponds to the number of times a type of Human Centric Issue has been identified within the repository. Note that each issue in the repository may be assigned more than one Human Centric Issue tag.';\n  const polarChartUseCase =\n    'This chart can be used to identify what types of Human Centric Issues are/are not appearing frequently in the repository, and thus can help lead discussions regarding how to focus development efforts towards creating an application which is conscious of Human Centric Issues.';\n\n  const horizontalChartDescription =\n    'This chart provides an overview of the progress status of each issue in the repository. Each bar corresponds to one of the four possible statuses (including \"unassigned\"), and the length of each bar corresponds to the number of issues in the GitHub repository with said progress status.';\n  const horizontalChartUseCase =\n    'This chart can be used to monitor whether the issues in the repository are being attended to or not, and can help ensure that there is not a pile-up of issues which are not being attended to.';\n\n  const stackedBarChartDescription =\n    'This chart provides a comprehensive summary of how the different Human Centric Issue categories have been identified in the GitHub repository over time. The horizontal axis corresponds to the dates at which issues have been raised in the GitHub repository, while the colours and length of the bars show how many of each Human Centric Issue tag has been applied to said issue(s) on each day. Colour is used to distinguish between the various Human Centric Issue categorisations.';\n  const stackedBarChartUseCase =\n    'This chart can be used to analyse how, at different stages of the software lifecycle, different types of Human Centric Issues become more and less relevant. For example, during the maintentance phase, there may be an increase in \"User Reaction\" Human Centric Issues. This information can help guide the focus of the team(s), behind the software throughout the software lifecycle.';\n\n  const verticalBarChartDescription =\n    'This chart provides a simple overview of the prioritisation levels of all issues in the GitHub repository. Each bar corresponds to one of the four possible priority levels (including \"unassigned\"), and the height of each bar corresponds to the number of issues in the GitHub repository with said prioritisation level.';\n  const verticalBarChartUseCase =\n    \"This chart can be used to easily gauge the level of urgency with which the repository's issues need to be attended to.\";\n\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <div>\n            <div\n              style={{\n                display: 'flex',\n                borderBottom: '2px solid lightgrey',\n                paddingBottom: '25px',\n                paddingTop: '25px'\n              }}\n            >\n              <div\n                style={{\n                  display: 'flex',\n                  justifyContent: 'center',\n                  alignItems: 'center',\n                  width: '70%'\n                }}\n              >\n                <PolarAreaChartComponent></PolarAreaChartComponent>\n              </div>\n              <div\n                style={{\n                  paddingTop: '5vh',\n                  width: '30%',\n                  paddingRight: '5%'\n                }}\n              >\n                <div style={{ fontSize: 'larger' }}>\n                  {polarChartDescription}\n                </div>\n                <p></p>\n                {polarChartUseCase}\n              </div>\n            </div>\n\n            <div\n              style={{\n                display: 'flex',\n                paddingTop: '25px',\n                paddingBottom: '25px',\n                borderBottom: '2px solid lightgrey'\n              }}\n            >\n              <div\n                style={{\n                  display: 'flex',\n                  justifyContent: 'center',\n                  alignItems: 'center',\n                  width: '70%'\n                }}\n              >\n                <HorizontalBarChartComponent></HorizontalBarChartComponent>\n              </div>\n              <div\n                style={{ width: '30%', paddingTop: '5vh', paddingRight: '5%' }}\n              >\n                <div style={{ fontSize: 'larger' }}>\n                  {horizontalChartDescription}\n                </div>\n                <p></p>\n                {horizontalChartUseCase}\n              </div>\n            </div>\n\n            <div\n              style={{\n                // display: 'flex',\n                borderBottom: '2px solid lightgrey',\n                paddingBottom: '25px',\n                paddingTop: '25px'\n              }}\n            >\n              <div\n                style={{\n                  display: 'flex',\n                  justifyContent: 'center',\n                  alignItems: 'center',\n                  width: '90%'\n                }}\n              >\n                <StackedBarChartComponent></StackedBarChartComponent>\n              </div>\n              <div\n                style={{\n                  paddingTop: '5vh',\n                  paddingLeft: '5%',\n                  paddingRight: '5%'\n                }}\n              >\n                <div style={{ fontSize: 'larger' }}>\n                  {stackedBarChartDescription}\n                </div>\n                <p></p>\n                {stackedBarChartUseCase}\n              </div>\n            </div>\n\n            <div\n              style={{\n                display: 'flex',\n                borderBottom: '2px solid lightgrey',\n                paddingBottom: '25px',\n                paddingTop: '25px'\n              }}\n            >\n              <div\n                style={{\n                  display: 'flex',\n                  justifyContent: 'center',\n                  alignItems: 'center',\n                  width: '80%'\n                }}\n              >\n                <PriorityBarChartComponent></PriorityBarChartComponent>\n              </div>\n              <div\n                style={{ width: '30%', paddingTop: '5vh', paddingRight: '5%' }}\n              >\n                <div style={{ fontSize: 'larger' }}>\n                  {verticalBarChartDescription}\n                </div>\n                <p></p>\n                {verticalBarChartUseCase}\n              </div>\n            </div>\n          </div>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/PrioritiseIssueComponent.js',
                  file_name: 'PrioritiseIssueComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport { addGitHubLabels } from '../helpers/addGitHubLabels';\nimport { removeGitHubLabel } from '../helpers/removeGitHubLabel';\nimport * as uuid from 'uuid';\nimport {\n  lowPriorityLabel,\n  mediumPriorityLabel,\n  highPriorityLabel\n} from '../helpers/labels';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\n\nimport Card from 'react-bootstrap/Card';\nimport Button from 'react-bootstrap/Button';\n\nexport default function PrioritiseIssueComponent({ issue, setIssues }) {\n  const updateLocalStorage = (newPriorityLabel) => {\n    // update issues in local storage and trigger re-render\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    // access current issue, remove its previous label\n    const updatedIssues = issues.map((anIssue) => {\n      if (anIssue.number == issue.number) {\n        anIssue.priority = newPriorityLabel;\n      }\n      return anIssue;\n    });\n\n    localStorage.setItem(ISSUES_KEY, JSON.stringify(updatedIssues));\n    setIssues(updatedIssues);\n  };\n\n  const setUnassigned = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n\n    updateLocalStorage({ name: null, color: null });\n  };\n\n  const setLowPriority = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [lowPriorityLabel.name]);\n    // update local storage\n    updateLocalStorage(lowPriorityLabel);\n  };\n\n  const setMediumPriority = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [mediumPriorityLabel.name]);\n    // update local storage\n    updateLocalStorage(mediumPriorityLabel);\n  };\n\n  const setHighPriority = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [highPriorityLabel.name]);\n    // update local storage\n    updateLocalStorage(highPriorityLabel);\n  };\n\n  return (\n    <>\n      <Card border=\"secondary\" style={{ borderWidth: '0px' }}>\n        <Card.Body>\n          <a href={issue.html_url} style={{ color: 'black' }}>\n            <Card.Title>{issue.title}</Card.Title>\n          </a>\n          HCIs:\n          <div style={{ display: 'flex', justifyContent: 'center' }}>\n            {issue.HCILabels.map((label) => {\n              return (\n                <div\n                  style={{\n                    borderRadius: '100%',\n                    height: '4vh',\n                    width: '4vh',\n                    borderColor: 'grey',\n                    padding: '10px',\n                    margin: '0.2%',\n                    backgroundColor: '#' + label.color + '80'\n                  }}\n                ></div>\n              );\n            })}\n          </div>\n          {issue.priority.name == null && (\n            <Button\n              variant=\"outline-secondary\"\n              onClick={() => setLowPriority(null)}\n            >\n              {'>'}\n            </Button>\n          )}\n          {issue.priority.name == lowPriorityLabel.name && (\n            <>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setUnassigned(lowPriorityLabel.name)}\n              >\n                {'<'}\n              </Button>\n\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setMediumPriority(lowPriorityLabel.name)}\n              >\n                {'>'}\n              </Button>\n            </>\n          )}\n          {issue.priority.name == mediumPriorityLabel.name && (\n            <>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setLowPriority(mediumPriorityLabel.name)}\n              >\n                {'<'}\n              </Button>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setHighPriority(mediumPriorityLabel.name)}\n              >\n                {'>'}\n              </Button>\n            </>\n          )}\n          {issue.priority.name == highPriorityLabel.name && (\n            <Button\n              variant=\"outline-secondary\"\n              onClick={() => setMediumPriority(highPriorityLabel.name)}\n            >\n              {'<'}\n            </Button>\n          )}\n        </Card.Body>\n      </Card>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/PrioritiseViewComponent.js',
                  file_name: 'PrioritiseViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport * as uuid from 'uuid';\nimport {\n  lowPriorityLabel,\n  mediumPriorityLabel,\n  highPriorityLabel\n} from '../helpers/labels';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\nimport PrioritiseIssueComponent from './PrioritiseIssueComponent';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\nimport { defaultGrey } from '../theme/hexCodes';\n\nexport default function PrioritiseViewComponent({ linkStatus }) {\n  const [issues, setIssues] = useState([]);\n\n  const getIssues = async () => {\n    setIssues(JSON.parse(localStorage.getItem(ISSUES_KEY)));\n  };\n\n  useEffect(() => {\n    getIssues();\n  }, []);\n\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <div\n            style={{\n              display: 'grid',\n              gridTemplateColumns: 'repeat(4, 1fr)',\n              gridGap: 20,\n              padding: '1vw'\n            }}\n          >\n            <div\n              style={{\n                backgroundColor: `#${defaultGrey}`,\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5\n              // style={{ backgroundColor: 'lightgrey', borderRadius: '10px' }}\n              >\n                Unassigned\n              </h5>\n              <div>\n                {issues\n                  .filter((issue) => issue.priority.name == null)\n                  .map((issue) => {\n                    return (\n                      <div>\n                        <PrioritiseIssueComponent\n                          issue={issue}\n                          key={uuid.v4()}\n                          setIssues={setIssues}\n                        ></PrioritiseIssueComponent>\n                        <br></br>\n                      </div>\n                    );\n                  })}\n              </div>\n            </div>\n            <div\n              style={{\n                backgroundColor: '#' + lowPriorityLabel.color + '80',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5\n              // style={{\n              //   backgroundColor: '#' + lowPriorityLabel.color,\n              //   borderRadius: '10px'\n              // }}\n              >\n                Low Priority\n              </h5>\n              {issues\n                .filter((issue) => issue.priority.name == lowPriorityLabel.name)\n                .map((issue) => {\n                  return (\n                    <div>\n                      <PrioritiseIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></PrioritiseIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n            <div\n              style={{\n                backgroundColor: '#' + mediumPriorityLabel.color + '80',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5\n              // style={{\n              //   backgroundColor: '#' + mediumPriorityLabel.color,\n              //   borderRadius: '10px'\n              // }}\n              >\n                Medium Priority\n              </h5>\n              {issues\n                .filter(\n                  (issue) => issue.priority.name == mediumPriorityLabel.name\n                )\n                .map((issue) => {\n                  return (\n                    <div>\n                      <PrioritiseIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></PrioritiseIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n            <div\n              style={{\n                backgroundColor: '#' + highPriorityLabel.color + '80',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5\n              // style={{\n              //   backgroundColor: '#' + highPriorityLabel.color,\n              //   borderRadius: '10px'\n              // }}\n              >\n                High Priority\n              </h5>\n              {issues\n                .filter(\n                  (issue) => issue.priority.name == highPriorityLabel.name\n                )\n                .map((issue) => {\n                  return (\n                    <div>\n                      <PrioritiseIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></PrioritiseIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n          </div>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/ProgressIssueComponent.js',
                  file_name: 'ProgressIssueComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport { addGitHubLabels } from '../helpers/addGitHubLabels';\nimport { removeGitHubLabel } from '../helpers/removeGitHubLabel';\nimport * as uuid from 'uuid';\nimport {\n  resolvedHCILabel,\n  resolvingHCILabel,\n  unresolvedHCILabel\n} from '../helpers/labels';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\n\nimport Card from 'react-bootstrap/Card';\nimport Button from 'react-bootstrap/Button';\n\nexport default function ProgressIssueComponent({ issue, setIssues }) {\n  const updateLocalStorage = (newStatusLabel) => {\n    // update issues in local storage and trigger re-render\n    const issues = JSON.parse(localStorage.getItem(ISSUES_KEY));\n    // access current issue, remove its previous label\n    const updatedIssues = issues.map((anIssue) => {\n      if (anIssue.number == issue.number) {\n        anIssue.progressTag = newStatusLabel;\n      }\n      return anIssue;\n    });\n\n    localStorage.setItem(ISSUES_KEY, JSON.stringify(updatedIssues));\n    setIssues(updatedIssues);\n  };\n  const setUnassigned = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n\n    updateLocalStorage({ name: null, color: null });\n  };\n\n  const setUnresolved = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [unresolvedHCILabel.name]);\n    // update local storage\n    updateLocalStorage(unresolvedHCILabel);\n  };\n\n  const setResolving = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [resolvingHCILabel.name]);\n    // update local storage\n    updateLocalStorage(resolvingHCILabel);\n  };\n\n  const setResolved = (prev) => {\n    // remove prev label\n    removeGitHubLabel(issue.number, prev);\n    // add new label\n    addGitHubLabels(issue.number, [resolvedHCILabel.name]);\n    // update local storage\n    updateLocalStorage(resolvedHCILabel);\n  };\n\n  return (\n    <>\n      <Card border=\"secondary\" style={{ borderWidth: '0px' }}>\n        <Card.Header\n          style={{ backgroundColor: '#' + issue.priority.color + '70' }}\n        >\n          {issue.priority.name && <div>{issue.priority.name}</div>}\n          {!issue.priority.name && <></>}\n        </Card.Header>\n        <Card.Body>\n          <a href={issue.html_url} style={{ color: 'black' }}>\n            <Card.Title>{issue.title}</Card.Title>\n          </a>\n          HCIs:\n          <div style={{ display: 'flex', justifyContent: 'center' }}>\n            {issue.HCILabels.map((label) => {\n              return (\n                <div\n                  style={{\n                    borderRadius: '100%',\n                    height: '4vh',\n                    width: '4vh',\n                    borderColor: 'grey',\n                    padding: '10px',\n                    margin: '0.2%',\n                    backgroundColor: '#' + label.color + '80'\n                  }}\n                ></div>\n              );\n            })}\n          </div>\n          {issue.progressTag.name == null && (\n            <Button\n              variant=\"outline-secondary\"\n              onClick={() => setUnresolved(null)}\n            >\n              {'>'}\n            </Button>\n          )}\n          {issue.progressTag.name == unresolvedHCILabel.name && (\n            <>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setUnassigned(unresolvedHCILabel.name)}\n              >\n                {'<'}\n              </Button>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setResolving(unresolvedHCILabel.name)}\n              >\n                {'>'}\n              </Button>\n            </>\n          )}\n          {issue.progressTag.name == resolvingHCILabel.name && (\n            <>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setUnresolved(resolvingHCILabel.name)}\n              >\n                {'<'}\n              </Button>\n              <Button\n                variant=\"outline-secondary\"\n                onClick={() => setResolved(resolvingHCILabel.name)}\n              >\n                {'>'}\n              </Button>\n            </>\n          )}\n          {issue.progressTag.name == resolvedHCILabel.name && (\n            <Button\n              variant=\"outline-secondary\"\n              onClick={() => setResolving(resolvedHCILabel.name)}\n            >\n              {'<'}\n            </Button>\n          )}\n        </Card.Body>\n      </Card>\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/ProgressViewComponent.js',
                  file_name: 'ProgressViewComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React, { useState, useEffect } from 'react';\nimport * as uuid from 'uuid';\nimport ProgressIssueComponent from './ProgressIssueComponent';\nimport {\n  resolvedHCILabel,\n  resolvingHCILabel,\n  unresolvedHCILabel\n} from '../helpers/labels';\nimport UnAuthenticatedDefault from './UnAuthenticatedDefault';\nimport { ISSUES_KEY } from '../helpers/localStorageKeys';\nimport * as linkStatuses from '../helpers/linkStatuses';\nimport LoadingDefaultViewComponent from './LoadingDefaultViewComponent';\nimport {\n  defaultGrey,\n  resolvedColour,\n  resolvingColour,\n  unresolvedColour\n} from '../theme/hexCodes';\n\nexport default function ProgressViewComponent({ linkStatus }) {\n  const [issues, setIssues] = useState([]);\n\n  const getIssues = async () => {\n    setIssues(JSON.parse(localStorage.getItem(ISSUES_KEY)));\n  };\n\n  useEffect(() => {\n    getIssues();\n  }, []);\n\n  return (\n    <>\n      {linkStatus == linkStatuses.unlinkedState && (\n        <UnAuthenticatedDefault></UnAuthenticatedDefault>\n      )}\n      {linkStatus == linkStatuses.loadingState && (\n        <LoadingDefaultViewComponent></LoadingDefaultViewComponent>\n      )}\n      {linkStatus == linkStatuses.readyState && (\n        <>\n          <div\n            style={{\n              display: 'grid',\n              gridTemplateColumns: 'repeat(4, 1fr)',\n              gridGap: 20,\n              padding: '1vw'\n            }}\n          >\n            <div\n              style={{\n                backgroundColor: `#${defaultGrey}`,\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5\n              // style={{ backgroundColor: 'lightgrey', borderRadius: '10px' }}\n              >\n                Unassigned\n              </h5>\n              <div>\n                {issues\n                  .filter((issue) => issue.progressTag.name == null)\n                  .map((issue) => {\n                    return (\n                      <div>\n                        <ProgressIssueComponent\n                          issue={issue}\n                          key={uuid.v4()}\n                          setIssues={setIssues}\n                        ></ProgressIssueComponent>\n                        <br></br>\n                      </div>\n                    );\n                  })}\n              </div>\n            </div>\n            <div\n              style={{\n                backgroundColor: `#${unresolvedColour}` + '70',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5>Unresolved</h5>\n              {issues\n                .filter(\n                  (issue) => issue.progressTag.name == unresolvedHCILabel.name\n                )\n                .map((issue) => {\n                  return (\n                    <div>\n                      <ProgressIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></ProgressIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n            <div\n              style={{\n                backgroundColor: `#${resolvingColour}` + '70',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5>Resolving</h5>\n              {issues\n                .filter(\n                  (issue) => issue.progressTag.name == resolvingHCILabel.name\n                )\n                .map((issue) => {\n                  return (\n                    <div>\n                      <ProgressIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></ProgressIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n            <div\n              style={{\n                backgroundColor: `#${resolvedColour}` + '70',\n                padding: '10px',\n                borderRadius: '10px'\n              }}\n            >\n              <h5>Resolved</h5>\n              {issues\n                .filter(\n                  (issue) => issue.progressTag.name == resolvedHCILabel.name\n                )\n                .map((issue) => {\n                  return (\n                    <div>\n                      <ProgressIssueComponent\n                        issue={issue}\n                        key={uuid.v4()}\n                        setIssues={setIssues}\n                      ></ProgressIssueComponent>\n                      <br></br>\n                    </div>\n                  );\n                })}\n            </div>\n          </div>\n        </>\n      )}\n    </>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/TipPopUpComponent.js',
                  file_name: 'TipPopUpComponent.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    "import React from 'react';\nimport OverlayTrigger from 'react-bootstrap/OverlayTrigger';\nimport Popover from 'react-bootstrap/Popover';\nimport {\n  appUsageLabel,\n  inclusivenessLabel,\n  noHCIIdentifiedLabel,\n  userReactionLabel\n} from '../helpers/labels';\nimport { mainTheme } from '../theme/hexCodes';\n\nexport default function TipPopUpComponent() {\n  const allHCILabels = [\n    appUsageLabel,\n    userReactionLabel,\n    inclusivenessLabel,\n    noHCIIdentifiedLabel\n  ];\n  const extendedDescriptions = [\n    appUsageLabel.description +\n      'This category consists of Resource Usage, Buginess, Change & Update, UI & UX, Privacy & Security, Usage Instruction, Access Issues, and Others.',\n    userReactionLabel.description +\n      'We further divide this into Fulfilling interests, Emotional aspects, Preference, and Others.',\n    inclusivenessLabel.description +\n      'It includes issues related to the age, gender, and socioeconomic status of the users. We categorise Inclusiveness into five different subcategories, as: Compatibility, Location, Language, Accessibility, and Others.',\n    ''\n  ];\n  const popover = (\n    <Popover id=\"popover-basic\" style={{ maxWidth: '80vw', maxHeight: '80vh' }}>\n      <Popover.Header as=\"h3\" style={{ backgroundColor: `#${mainTheme}` }}>\n        Human Centric Issue Categories\n      </Popover.Header>\n      <Popover.Body>\n        <div>\n          {allHCILabels.map((label, i) => {\n            return (\n              <div>\n                <div\n                  style={{\n                    display: 'flex',\n                    justifyContent: 'left'\n                  }}\n                >\n                  <div\n                    style={{\n                      borderRadius: '100%',\n                      height: '4vh',\n                      width: '4vh',\n                      borderColor: 'grey',\n                      padding: '10px',\n                      margin: '0.2%',\n                      backgroundColor: '#' + label.color + '80'\n                    }}\n                  ></div>\n                  <div style={{ fontSize: '16px', paddingLeft: '20px' }}>\n                    {label.name}\n                  </div>\n                </div>\n                <br></br>\n                <p style={{ fontSize: '13px' }}>{extendedDescriptions[i]}</p>\n              </div>\n            );\n          })}\n\n          <p>\n            Khalajzadeh, H., Shahin, M., Obie, H. O., Agrawal, P., & Grundy, J.\n            (2022). Supporting Developers in Addressing Human-centric Issues in\n            Mobile Apps. arXiv preprint arXiv:2203.12212.\n          </p>\n        </div>\n      </Popover.Body>\n    </Popover>\n  );\n\n  return (\n    <OverlayTrigger trigger=\"click\" placement=\"top\" overlay={popover}>\n      <button\n        style={{\n          borderRadius: '100%',\n          width: '10vh',\n          height: '10vh',\n          borderWidth: '0px',\n          fontSize: '30px',\n          backgroundColor: `#${mainTheme}`\n        }}\n      >\n        ?\n      </button>\n    </OverlayTrigger>\n  );\n}\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hang: [595],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components/UnAuthenticatedDefault.js',
                  file_name: 'UnAuthenticatedDefault.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/components',
                  content:
                    'import React from \'react\';\nimport { NavLink } from \'react-router-dom\';\n\nexport default function UnAuthenticatedDefault() {\n  return (\n    <>\n      <br></br>\n      <h3>Currently not linked to a GitHub repository!</h3>\n\n      <NavLink exact="true" to="/">\n        Click here to link to a repository\n      </NavLink>\n    </>\n  );\n}\n',
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
              ],
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/css',
              file_name: 'css',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/css/App.css',
                  file_name: 'App.css',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/css',
                  content:
                    '.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n',
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {
                      hit: [409],
                    },
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/css/index.css',
                  file_name: 'index.css',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/css',
                  content:
                    "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
              ],
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
              file_name: 'helpers',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/addGitHubLabels.js',
                  file_name: 'addGitHubLabels.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const addGitHubLabels = async (issueNumber, labels = []) => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  await octokit.request(\n    `POST /repos/${\n      JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n    }/${\n      JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }/issues/${issueNumber}/labels`,\n    {\n      labels: labels\n    }\n  );\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/assignHCITags.js',
                  file_name: 'assignHCITags.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { predict } from './mlToolClient';\nimport { addGitHubLabels } from './addGitHubLabels';\nimport * as repoLabels from './labels';\n\nconst allHCILabels = [\n  repoLabels.appUsageLabel,\n  repoLabels.userReactionLabel,\n  repoLabels.inclusivenessLabel,\n  repoLabels.noHCIIdentifiedLabel\n];\n\nexport const assignHCITags = async (issue) => {\n  // NEED TO CLEAN THIS!\n  const existingLabelNames = issue.labels.map((label) => label.name);\n  let assigned = false;\n  existingLabelNames.forEach((existingLabelName) => {\n    allHCILabels\n      .map((label) => label.name)\n      .forEach((labelName) => {\n        if (existingLabelName == labelName) {\n          assigned = true;\n        }\n      });\n  });\n  // create a list of comments and issue body\n  let allComments = [];\n  if (issue.body == null) {\n    allComments.push('');\n  } else {\n    allComments.push(issue.body);\n  }\n  issue.cached_comments.forEach((comment) => {\n    allComments.push(comment.body);\n  });\n\n  const res = await predict(allComments);\n  if (!assigned) {\n    // set body HCI labels\n    let bodyHCILabels = mapToLabels(res[0]); // exclude comments\n    issue.bodyHCILabels = bodyHCILabels;\n    let accumulatedResult = res[0];\n    if (res.length > 1) {\n      const comments_1 = issue.cached_comments;\n      for (let j = 1; j < res.length; j++) {\n        // iterate over comments\n        const mappedCommentLabels = mapToLabels(res[j]);\n        comments_1[j - 1].HCILabels = mappedCommentLabels; // offset by 1 index as predictions includes body + comments\n\n        // update HCILabels by 'ORing' over first 3 elements of HCILabels and commentLabels\n        // only iterate over first 3\n        for (let k = 0; k < res[j].length - 1; k++) {\n          if (res[j][k] == 1) {\n            accumulatedResult[k] = res[j][k];\n            // if a label is identified, it means the 'no HCIs' tag must not be set\n            accumulatedResult[accumulatedResult.length - 1] = 0;\n          }\n        }\n      }\n    }\n    const labels = mapToLabels(accumulatedResult);\n\n    // use addGitHubLabels to add relevant labels to the issue\n    if (labels.length > 0) {\n      addGitHubLabels(\n        issue.number,\n        labels.map((label) => {\n          return label.name;\n        })\n      );\n    }\n    return labels;\n  } else {\n    // set body HCI labels to EXISTING LABELS\n    issue.bodyHCILabels = issue.labels.filter(\n      (label) =>\n        label.name == repoLabels.noHCIIdentifiedLabel.name ||\n        label.name == repoLabels.inclusivenessLabel.name ||\n        label.name == repoLabels.userReactionLabel.name ||\n        label.name == repoLabels.appUsageLabel.name\n    );\n    if (res.length > 1) {\n      const commentsAssigned = issue.cached_comments;\n      for (let j = 1; j < res.length; j++) {\n        // iterate over comments\n        const mappedCommentLabels = mapToLabels(res[j]);\n        commentsAssigned[j - 1].HCILabels = mappedCommentLabels; // offset by 1 index as predictions includes body + comments\n      }\n    }\n    return issue.labels.filter(\n      (label) =>\n        label.name == repoLabels.noHCIIdentifiedLabel.name ||\n        label.name == repoLabels.inclusivenessLabel.name ||\n        label.name == repoLabels.userReactionLabel.name ||\n        label.name == repoLabels.appUsageLabel.name\n    );\n  }\n};\n\nconst mapToLabels = (HCILabels) => {\n  const labels = [];\n  if (HCILabels[0] == 1) {\n    labels.push(repoLabels.appUsageLabel);\n  }\n  if (HCILabels[1] == 1) {\n    labels.push(repoLabels.inclusivenessLabel);\n  }\n  if (HCILabels[2] == 1) {\n    labels.push(repoLabels.userReactionLabel);\n  }\n  if (HCILabels[3] == 1) {\n    labels.push(repoLabels.noHCIIdentifiedLabel);\n  }\n  return labels;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/cleanRepo.js',
                  file_name: 'cleanRepo.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY, ISSUES_KEY } from './localStorageKeys';\nimport * as labels from './labels';\nimport { getGitHubLabels } from './getGitHubLabels';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const cleanRepo = async () => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  // get label names in repo\n  const repoLabels = await getGitHubLabels();\n  const labelNames = repoLabels.map((element) => {\n    return element.name;\n  });\n  console.log('all labels', labelNames);\n  const deletableLabels = labelNames.filter(\n    (labelName) =>\n      labelName === labels.appUsageLabel.name ||\n      labelName === labels.highPriorityLabel.name ||\n      labelName === labels.inclusivenessLabel.name ||\n      labelName === labels.lowPriorityLabel.name ||\n      labelName === labels.mediumPriorityLabel.name ||\n      labelName === labels.noHCIIdentifiedLabel.name ||\n      labelName === labels.resolvedHCILabel.name ||\n      labelName === labels.resolvingHCILabel.name ||\n      labelName === labels.unresolvedHCILabel.name ||\n      labelName === labels.userReactionLabel.name\n  );\n\n  console.log('removing the following labels from repo: ', deletableLabels);\n\n  deletableLabels.forEach(async (labelName) => {\n    try {\n      await octokit.request('DELETE /repos/{owner}/{repo}/labels/{name}', {\n        owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n        repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n        name: labelName\n      });\n    } catch (e) {\n      console.log(e);\n    }\n  });\n\n  localStorage.removeItem(CREDENTIALS_KEY);\n  localStorage.removeItem(ISSUES_KEY);\n  return;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/createGitHubLabels.js',
                  file_name: 'createGitHubLabels.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { getGitHubLabels } from './getGitHubLabels';\nimport * as labels from './labels';\nimport { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const createGitHubLabels = async () => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  const repoLabels = await getGitHubLabels();\n  const labelNames = repoLabels.map((element) => {\n    return element.name;\n  });\n\n  // User Reaction Label\n  if (!labelNames.includes(labels.userReactionLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.userReactionLabel.name,\n          description: labels.userReactionLabel.description,\n          color: labels.userReactionLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // Inclusiveness Label\n  if (!labelNames.includes(labels.inclusivenessLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.inclusivenessLabel.name,\n          description: labels.inclusivenessLabel.description,\n          color: labels.inclusivenessLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // App Usage Label\n  if (!labelNames.includes(labels.appUsageLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.appUsageLabel.name,\n          description: labels.appUsageLabel.description,\n          color: labels.appUsageLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // No HCIs label\n  if (!labelNames.includes(labels.noHCIIdentifiedLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.noHCIIdentifiedLabel.name,\n          description: labels.noHCIIdentifiedLabel.description,\n          color: labels.noHCIIdentifiedLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // Unresolved Label\n  if (!labelNames.includes(labels.unresolvedHCILabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.unresolvedHCILabel.name,\n          description: labels.unresolvedHCILabel.description,\n          color: labels.unresolvedHCILabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // Resolving Label\n  if (!labelNames.includes(labels.resolvingHCILabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.resolvingHCILabel.name,\n          description: labels.resolvingHCILabel.description,\n          color: labels.resolvingHCILabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // Resolved Label\n  if (!labelNames.includes(labels.resolvedHCILabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.resolvedHCILabel.name,\n          description: labels.resolvedHCILabel.description,\n          color: labels.resolvedHCILabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  // Low Priority\n  if (!labelNames.includes(labels.lowPriorityLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.lowPriorityLabel.name,\n          description: labels.lowPriorityLabel.description,\n          color: labels.lowPriorityLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n  // Medium Priority\n  if (!labelNames.includes(labels.mediumPriorityLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.mediumPriorityLabel.name,\n          description: labels.mediumPriorityLabel.description,\n          color: labels.mediumPriorityLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n  // High Priority\n  if (!labelNames.includes(labels.highPriorityLabel.name)) {\n    try {\n      await octokit.request(\n        `POST /repos/${\n          JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName\n        }/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName}/labels`,\n        {\n          owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n          repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n          name: labels.highPriorityLabel.name,\n          description: labels.highPriorityLabel.description,\n          color: labels.highPriorityLabel.color\n        }\n      );\n    } catch (e) {\n      console.log(e);\n    }\n  }\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/fluffIssueAuthor.js',
                  file_name: 'fluffIssueAuthor.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "const authorTag = 'author:';\n\nexport const fluffIssueAuthor = (issue) => {\n  const labels = issue.labels;\n  // uses the assumption that at most ONE fluff-author tag is applied to each issue\n  let fluffedAuthor = null;\n  labels.forEach((label) => {\n    if (label.name.slice(0, 7) == authorTag) {\n      fluffedAuthor = label.name.slice(7);\n    }\n  });\n\n  // safety net: no fluff tag applied\n  if (fluffedAuthor == null) {\n    fluffedAuthor = issue.user.login;\n  }\n\n  issue.fluffedAuthor = fluffedAuthor;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/getGitHubIssueComments.js',
                  file_name: 'getGitHubIssueComments.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const getGitHubIssueComments = async (issueNumber) => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  const response = await octokit.paginate(\n    `GET /repos/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName}/${\n      JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }/issues/${issueNumber}/comments`,\n    {\n      owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n      repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n      issue_number: issueNumber\n    }\n  );\n\n  return response;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/getGitHubIssues.js',
                  file_name: 'getGitHubIssues.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const getGitHubIssues = async () => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  const response = await octokit.paginate(\n    `GET /repos/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName}/${\n      JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }/issues`,\n    {\n      owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n      repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }\n  );\n\n  return response;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/getGitHubLabels.js',
                  file_name: 'getGitHubLabels.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const getGitHubLabels = async () => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  const response = await octokit.paginate(\n    `GET /repos/${JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName}/${\n      JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }/labels`,\n    {\n      owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n      repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName\n    }\n  );\n\n  return response;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/labels.js',
                  file_name: 'labels.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import {\n  appUsageColour,\n  highPriorityColour,\n  inclusivenessColour,\n  lowPriorityColour,\n  mainTheme,\n  mediumPriorityColour,\n  noHCIIdentifiedColour,\n  resolvedColour,\n  resolvingColour,\n  unresolvedColour,\n  userReactionColour\n} from '../theme/hexCodes';\n\nconst prefix = 'HCIV: ';\nexport const noHCIIdentifiedLabel = {\n  name: prefix + 'Non Human-Centric',\n  description:\n    'This issue does not contain human-centric discussion - Human Centric Issues dashboard.',\n  color: noHCIIdentifiedColour\n};\n\nexport const userReactionLabel = {\n  name: prefix + 'User Reaction',\n  description:\n    'This issue contains discussion around user reaction - Human Centric Issues dashboard.',\n  color: userReactionColour\n};\nexport const inclusivenessLabel = {\n  name: prefix + 'Inclusiveness',\n  description:\n    'This issue contains discussion around inclusiveness - Human Centric Issues dashboard.',\n  color: inclusivenessColour\n};\nexport const appUsageLabel = {\n  name: prefix + 'App Usage',\n  description:\n    'This issue contains discussion around app usage- Human Centric Issues dashboard.',\n  color: appUsageColour\n};\n\nexport const unresolvedHCILabel = {\n  name: prefix + 'Unresolved',\n  description:\n    'This issue is unresolved. This label was created by the Human Centric Issues dashboard.',\n  color: unresolvedColour\n};\nexport const resolvingHCILabel = {\n  name: prefix + 'Resolving',\n  description:\n    'This issue is currently being resolved - Human Centric Issues dashboard.',\n  color: resolvingColour\n};\nexport const resolvedHCILabel = {\n  name: prefix + 'Resolved',\n  description: 'This issue has been resolved - Human Centric Issues dashboard.',\n  color: resolvedColour\n};\n\nexport const lowPriorityLabel = {\n  name: prefix + 'Low Priority',\n  description:\n    'This issue is a low priority item - Human Centric Issues dashboard.',\n  color: lowPriorityColour\n};\nexport const mediumPriorityLabel = {\n  name: prefix + 'Medium Priority',\n  description:\n    'This issue is a medium priority item - Human Centric Issues dashboard..',\n  color: mediumPriorityColour\n};\nexport const highPriorityLabel = {\n  name: prefix + 'High Priority',\n  description:\n    'This issue is a high priority item - Human Centric Issues dashboard.',\n  color: highPriorityColour\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/linkStatuses.js',
                  file_name: 'linkStatuses.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "export const unlinkedState = 'unlinked';\nexport const loadingState = 'loading';\nexport const readyState = 'ready';\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/localStorageKeys.js',
                  file_name: 'localStorageKeys.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "export const ISSUES_KEY = 'issues';\nexport const CREDENTIALS_KEY = 'credentials';\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/mlToolClient.js',
                  file_name: 'mlToolClient.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "const urlBase = 'https://humancentricse.pythonanywhere.com/';\n\nexport const predict = async (comments) => {\n  let url = urlBase + '?';\n  let i;\n  for (i = 0; i < comments.length; i++) {\n    url += 'comment=' + comments[i];\n    if (i < comments.length - 1) {\n      url += '&';\n    }\n  }\n\n  const response = await fetch(url, {\n    method: 'POST'\n  });\n  return response.json();\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/mockMLTool.js',
                  file_name: 'mockMLTool.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    'const predict = (body) => {\n  const numberOfCategories = 3;\n  let categories = [];\n  for (let i = 0; i < numberOfCategories; i++) {\n    const rand = Math.floor(Math.random() * 4); // 1/4 chance to be assigned each HCI tag\n    if (rand == 1) {\n      categories[i] = 1;\n    } else {\n      categories[i] = 0;\n    }\n  }\n  let flag = false;\n  for (let i = 0; i < categories.length; i++) {\n    if (categories[i] == 1) {\n      flag = true;\n      break;\n    }\n  }\n  if (flag) {\n    categories.push(0);\n  } else {\n    categories.push(1);\n  }\n  return { categories: categories, confidence: Math.random().toPrecision(2) };\n};\n',
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/preProcessIssues.js',
                  file_name: 'preProcessIssues.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { getGitHubIssues } from './getGitHubIssues';\nimport { getGitHubIssueComments } from './getGitHubIssueComments';\nimport { assignHCITags } from './assignHCITags';\nimport * as repoLabels from './labels';\nimport { fluffIssueAuthor } from './fluffIssueAuthor';\n\nconst statusLabels = [\n  repoLabels.unresolvedHCILabel,\n  repoLabels.resolvingHCILabel,\n  repoLabels.resolvedHCILabel\n];\nconst priorityLabels = [\n  repoLabels.lowPriorityLabel,\n  repoLabels.mediumPriorityLabel,\n  repoLabels.highPriorityLabel\n];\nconst nullLabel = { name: null, color: null };\n\nlet validFound = false;\n\nexport const preProcessIssues = async () => {\n  validFound = false; // need to reset flag on each call\n  const issues = await generateIssues();\n  return issues;\n};\n\nconst generateIssues = async () => {\n  // get issues and comments\n  let issues = await getGitHubIssues();\n  issues = await new Promise((resolve) => {\n    issues.forEach((issue) => {\n      getGitHubIssueComments(issue.number)\n        .then((commentsResponse) => {\n          // set comments\n          issue.cached_comments = commentsResponse;\n        })\n        .then(() => {\n          // get ML response\n          assignHCITags(issue)\n            .then((HCIs) => {\n              issue.HCILabels = HCIs;\n            })\n            .then(() => {\n              // set set status labels\n              const labels = issue.labels;\n              // uses the assumption that only one status label is applied to each issue\n              let thisLabel = nullLabel;\n              labels.forEach((label) => {\n                if (\n                  statusLabels\n                    .map((label) => {\n                      return label.name;\n                    })\n                    .includes(label.name)\n                ) {\n                  thisLabel = label;\n                }\n              });\n              issue.progressTag = thisLabel;\n            })\n            .then(() => {\n              // set priority labels\n              const labels = issue.labels;\n              // uses the assumption that only one priority label is applied to each issue\n              let thisLabel = nullLabel;\n              labels.forEach((label) => {\n                if (\n                  priorityLabels\n                    .map((label) => {\n                      return label.name;\n                    })\n                    .includes(label.name)\n                ) {\n                  thisLabel = label;\n                }\n              });\n              issue.priority = thisLabel;\n            })\n            .then(fluffIssueAuthor(issue)) // fluff author of issue (for testing/demo)\n            .then(async () => {\n              // validation\n              if (!validFound) {\n                // only have the possibility of recursion of a valid copy has NOT been set yet\n                if (await validateIssues(issues)) {\n                  validFound = true; // stop recursive calls\n                  resolve(issues);\n                } else if (!(await validateIssues(issues))) {\n                  generateIssues(); // recursive call\n                }\n              }\n            });\n        });\n    });\n  });\n  return issues;\n};\n\nconst validateIssues = async (issues) => {\n  let valid = true;\n  valid = await new Promise((resolve) => {\n    issues.forEach((issue) => {\n      if (\n        issue.HCILabels == null ||\n        issue.bodyHCILabels == null ||\n        issue.cached_comments == null ||\n        issue.priority == null ||\n        issue.progressTag == null\n      ) {\n        valid = false;\n      }\n      if (issue.cached_comments != null) {\n        issue.cached_comments.forEach((comment) => {\n          if (comment.HCILabels == null) {\n            valid = false;\n          }\n        });\n      }\n    });\n    resolve(valid);\n  });\n  return valid;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/removeGitHubLabel.js',
                  file_name: 'removeGitHubLabel.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { CREDENTIALS_KEY } from './localStorageKeys';\n\nconst { Octokit } = require('@octokit/rest');\n\nexport const removeGitHubLabel = async (issueNumber, name) => {\n  const octokit = new Octokit({\n    auth: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).token\n  });\n\n  await octokit.request(\n    `DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`,\n    {\n      owner: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).userName,\n      repo: JSON.parse(localStorage.getItem(CREDENTIALS_KEY)).repoName,\n      issue_number: issueNumber,\n      name: name\n    }\n  );\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers/setupLocalStorageREFACTOR.js',
                  file_name: 'setupLocalStorageREFACTOR.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/helpers',
                  content:
                    "import { getGitHubIssues } from './getGitHubIssues';\nimport { getGitHubIssueComments } from './getGitHubIssueComments';\nimport { assignHCITags } from './assignHCITags';\nimport * as repoLabels from './labels';\nimport { ISSUES_KEY } from './localStorageKeys';\n\nconst statusLabels = [\n  repoLabels.unresolvedHCILabel,\n  repoLabels.resolvingHCILabel,\n  repoLabels.resolvedHCILabel\n];\nconst priorityLabels = [\n  repoLabels.lowPriorityLabel,\n  repoLabels.mediumPriorityLabel,\n  repoLabels.highPriorityLabel\n];\nconst nullLabel = { name: null, color: null };\n\nexport const setupLocalStorage2 = async () => {\n  synchronousProcess(await getGitHubIssues());\n  // const issues = await asyncProcess(\n  //   synchronousProcess(await getGitHubIssues())\n  // );\n  // console.log(issues);\n  // localStorage.setItem(\n  //   'refactored-issues',\n  //   JSON.stringify(asyncProcessedIssues)\n  // );\n  return;\n};\n\nconst asyncProcess = async (issues) => {\n  const processedIssues = issues.map(async (issue) => {\n    // get comments\n    issue.cached_comments = await getGitHubIssueComments(issue.number);\n\n    // get/set ML response\n    issue.HCILabels = await assignHCITags(issue);\n  });\n  return processedIssues;\n};\n\nconst synchronousProcess = (issues) => {\n  issues.forEach((issue) => {\n    // set status label\n    // uses the assumption that only one priority label is applied to each issue\n    const labels = issue.labels;\n    const thisStatusLabel = nullLabel;\n    labels.forEach((label) => {\n      if (statusLabels.map((label) => label.name).includes(label.name)) {\n        thisStatusLabel = label;\n      }\n    });\n    issue.progressTag = thisStatusLabel;\n\n    // set priority label\n    // uses the assumption that only one priority label is applied to each issue\n    const thisPriorityLabel = nullLabel;\n    labels.forEach((label) => {\n      if (priorityLabels.map((label) => label.name).includes(label.name)) {\n        thisPriorityLabel = label;\n      }\n    });\n    issue.priority = thisPriorityLabel;\n  });\n  return issues;\n};\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
              ],
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/index.js',
              file_name: 'index.js',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content:
                "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './css/index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n",
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/logos',
              file_name: 'logos',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/logos/logo.png',
                  file_name: 'logo.png',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/logos',
                  content:
                    'WARNING: File type not currently supported - contents no analysed.',
                  is_dir: false,
                },
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/logos/logo.svg',
                  file_name: 'logo.svg',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/logos',
                  content:
                    'WARNING: File type not currently supported - contents no analysed.',
                  is_dir: false,
                },
              ],
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/Main.js',
              file_name: 'Main.js',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content:
                "import React, { Component } from 'react';\n\nexport default class Main extends Component {\n  render() {\n    return <div>Main</div>;\n  }\n}\n",
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/reportWebVitals.js',
              file_name: 'reportWebVitals.js',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content:
                "const reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\nexport default reportWebVitals;\n",
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/setupTests.js',
              file_name: 'setupTests.js',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content:
                "// jest-dom adds custom jest matchers for asserting on DOM nodes.\n// allows you to do things like:\n// expect(element).toHaveTextContent(/react/i)\n// learn more: https://github.com/testing-library/jest-dom\nimport '@testing-library/jest-dom';\n",
              is_dir: false,
              sspm_matches: {
                'ABLEIST LANGUAGE': {},
                'GENDERED LANGUAGE': {},
                'VIOLENT LANGUAGE': {},
                'AGEIST LANGUAGE': {},
                'RACIALLY CHARGED LANGUAGE': {},
                'BIASED LANGUAGE': {},
                'MILITARY LANGUAGE': {},
                OTHER: {},
              },
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/test',
              file_name: 'test',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/test/App.test.js',
                  file_name: 'App.test.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/test',
                  content:
                    "import { render, screen } from '@testing-library/react';\nimport App from '../App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
              ],
            },
            {
              file_path:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/theme',
              file_name: 'theme',
              parent:
                'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src',
              content: null,
              is_dir: true,
              children: [
                {
                  file_path:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/theme/hexCodes.js',
                  file_name: 'hexCodes.js',
                  parent:
                    'human-centric-issue-visualiser/human-centric-issue-visualiser-main/src/theme',
                  content:
                    "// export const mainTheme = '9AC7BF'; // green\nexport const accentColour = '5165A8'; // blue\nexport const mainTheme = 'F2EEE3'; // beige\nexport const defaultGrey = 'E6E6E6';\nexport const unresolvedColour = 'C1867B';\nexport const resolvingColour = '9AB5C1';\nexport const resolvedColour = 'B8BC86';\nexport const noHCIIdentifiedColour = '9AC7BF';\nexport const userReactionColour = 'FF66FF';\nexport const inclusivenessColour = '6666FF';\nexport const appUsageColour = '66B2FF';\n// export const lowPriorityColour = 'FFF474';\n// export const mediumPriorityColour = 'F06553';\n// export const highPriorityColour = '3C3B5f';\n\nexport const lowPriorityColour = '7297A0';\nexport const mediumPriorityColour = 'B2A68D';\nexport const highPriorityColour = 'A88C7D';\n",
                  is_dir: false,
                  sspm_matches: {
                    'ABLEIST LANGUAGE': {},
                    'GENDERED LANGUAGE': {},
                    'VIOLENT LANGUAGE': {},
                    'AGEIST LANGUAGE': {},
                    'RACIALLY CHARGED LANGUAGE': {},
                    'BIASED LANGUAGE': {},
                    'MILITARY LANGUAGE': {},
                    OTHER: {},
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};