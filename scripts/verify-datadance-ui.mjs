import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const requiredExports = [
  'DataDanceAppShell',
  'DataDanceShell',
  'DataDanceSidebar',
  'DataDanceWorkSurface',
  'defaultMenuConfig',
  'DDAlert',
  'DDButton',
  'DDCard',
  'DDCascader',
  'DDDatePicker',
  'DDDrawer',
  'DDIconButton',
  'DDInput',
  'DDModal',
  'DDPageHeader',
  'DDPagination',
  'DDSelect',
  'DDSwitch',
  'DDTable',
  'DDTabs',
  'DDTag',
  'DDTreeSelect',
];

try {
  const targetPackageJson = path.join(process.cwd(), 'package.json');
  const targetRequire = createRequire(pathToFileURL(targetPackageJson));
  const packageEntry = targetRequire.resolve('@datadance/ui');
  const ui = await import(pathToFileURL(packageEntry).href);
  const missing = requiredExports.filter((name) => !(name in ui));

  if (missing.length > 0) {
    throw new Error(`missing exports: ${missing.join(', ')}`);
  }

  targetRequire.resolve('@datadance/ui/styles.css');
  console.log(`DataDance UI verified: ${requiredExports.length} required exports and package CSS are available.`);
} catch (error) {
  console.error(`DataDance UI verification failed: ${error.message}`);
  console.error('Install the approved package with: npm install github:zaxison/datadance-ui#v0.2.0');
  process.exit(1);
}
