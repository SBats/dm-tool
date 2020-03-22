import { Application } from 'spectron'
import path from 'path'

export default function setup(): void {
  beforeEach(async function () {
    this.app = new Application({
      path: require.resolve('electron'),
      args: [path.join(__dirname, '..')],
      webdriverOptions: {},
    })
    await this.app.start()
    const browser = this.app.client
    await browser.waitUntilWindowLoaded()

    browser.timeouts('script', 15000)
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })
}
