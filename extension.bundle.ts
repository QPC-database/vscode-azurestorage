/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * This is the external face of extension.bundle.js, the main webpack bundle for the extension.
 * Anything needing to be exposed outside of the extension sources must be exported from here, because
 * everything else will be in private modules in extension.bundle.js.
 */

// Exports for tests
// The tests are not packaged with the webpack bundle and therefore only have access to code exported from this file.
//
// The tests should import '../extension.bundle.ts'. At design-time they live in tests/ and so will pick up this file (extension.bundle.ts).
// At runtime the tests live in dist/tests and will therefore pick up the main webpack bundle at dist/extension.bundle.js.
export * from 'vscode-azureextensionui';
// Export activate/deactivate for main.js
export { activateInternal, deactivateInternal } from './src/extension';
export { ext } from './src/extensionVariables';
export { AzureAccountTreeItem } from './src/tree/AzureAccountTreeItem';
export { StorageAccountTreeItem } from './src/tree/StorageAccountTreeItem';
export { AzExtFsExtra } from './src/utils/AzExtFsExtra';
export { delay } from './src/utils/delay';
export { getRandomHexString } from './src/utils/stringUtils';

// NOTE: The auto-fix action "source.organizeImports" does weird things with this file, but there doesn't seem to be a way to disable it on a per-file basis so we'll just let it happen
