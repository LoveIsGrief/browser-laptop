/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// VAULT_HOST can be set to:
// https://vault.brave.com for production
// https://vault-staging.brave.com for a dev build
// http://localhost:3000 for production
const vaultHost = process.env.VAULT_HOST || 'https://vault-staging.brave.com'
const adHost = process.env.AD_HOST || 'https://oip.brave.com'
const bravePort = process.env.BRAVE_PORT || process.env.npm_config_port || process.env.npm_package_config_port
const env = process.env.BRAVE_ENV || process.env.NODE_ENV || 'development'

// make sure BRAVE_ENV and NODE_ENV are always set
process.env.BRAVE_ENV = process.env.BRAVE_ENV || env
process.env.NODE_ENV = process.env.NODE_ENV || env

module.exports = {
  cache: {
    urlParse: 30
  },
  zoom: {
    defaultValue: 0,
    // Each zoomLevel is multiplied by 20 to get the percentage offset from 100. That's 0.05 per percentage offset.
    zoomLevels: [-3.75, -3.35, -2.5, -1.65, -1.25, -0.5, -0.25, 0, 0.25, 0.5, 1.25, 2.5, 3.75, 5, 7.5, 10, 15, 20]
  },
  fingerprintingInfoUrl: 'https://github.com/brave/browser-laptop/wiki/Fingerprinting-Protection-Mode',
  maxClosedFrames: 100,
  menu: {
    // History -> Recently closed frame list
    maxClosedFrames: 10
  },
  thumbnail: {
    width: 160,
    height: 100
  },
  defaultLocale: 'en-US',
  defaultUrl: 'about:newtab',
  urlBarSuggestions: {
    maxOpenedFrames: 2,
    maxHistorySites: 5,
    maxAboutPages: 2,
    maxSearch: 3,
    maxTopSites: 3
  },
  navigationBar: {
    defaultSearchSuggestions: false,
    maxHistorySites: 10
  },
  defaultOpenSearchPath: 'content/search/google.xml',
  vault: {
    syncUrl: (userId) => `${vaultHost}/v1/users/${userId}/appState`,
    authUrl: (userId) => `${vaultHost}/v1/users/${userId}`,
    replacementUrl: adHost
  },
  braveExtensionId: 'mnojpmjdmbbfmejpflffifhffcmidifd',
  torrentExtensionId: 'fmdpfempfmekjkcfdehndghogpnpjeno',
  syncExtensionId: 'cjnmeadmgmiihncdidmfiabhenbggfjm',
  PDFJSExtensionId: 'jdbefljfgobbmcidnmpjamcbhnbphjnb',
  PocketExtensionId: 'niloccemoadcdkdjlinkgdfekeahmflj',
  vimiumExtensionId: 'dbepggeogbaibhgnhhndojpepiihcmeb',
  honeyExtensionId: 'bmnlcjabgnpnenekpadlanbbkooimhnj',
  widevineComponentId: 'oimompecagnajdejgnnjijobebaeigek',
  coinbaseOrigin: 'https://buy.coinbase.com',
  newtab: {
    fallbackImage: {
      name: 'Bay Bridge',
      source: 'img/newtab_stock_image.jpg',
      author: 'Darrell Sano',
      link: 'https://dksfoto.smugmug.com'
    }
  },
  tabs: {
    maxAllowedNewSessions: 9
  },
  iconSize: 16,
  env,
  bravePort
}
