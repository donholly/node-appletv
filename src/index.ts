import { Credentials } from './lib/credentials';
import { AppleTV } from './lib/appletv';
import { Connection } from './lib/connection';
import { Browser } from './lib/browser';
import { NowPlayingInfo } from './lib/now-playing-info';
import { Message } from './lib/message';
import { SupportedCommand } from './lib/supported-command';

/**
* A convenience function to scan for AppleTVs on the local network.
* @param uniqueIdentifier  An optional identifier for the AppleTV to scan for. The AppleTV advertises this via Bonjour.
* @param timeout  An optional timeout value (in seconds) to give up the search after.
* @returns A promise that resolves to an array of AppleTV objects. If you provide a `uniqueIdentifier` the array is guaranteed to only contain one object.
*/

console.log('=====This is a local node-appletv repo=====')

export function scan(uniqueIdentifier?: string, timeout?: number): Promise<AppleTV[]> {
  let browser = new Browser();
  return browser.scan(uniqueIdentifier, timeout);
}

/**
* A convenience function to parse a credentials string into a Credentials object.
* @param text  The credentials string.
* @returns A credentials object.
*/
export function parseCredentials(text: string): Credentials {
  return Credentials.parse(text);
}

export {
  AppleTV,
  Connection,
  Browser,
  NowPlayingInfo,
  Credentials,
  Message,
  SupportedCommand
};