import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Page from '../src'

storiesOf('Page', module)
  .addWithInfo('Basic', '', () => (
    <Page>
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
  .addWithInfo('Loading', 'Page with Loading prop', () => (
    <Page loading />
  ), { inline: true })
  .addWithInfo('Error(Object)', 'Page with an error object passed in', () => (
    <Page error={new Error('Oh no!')} />
  ), { inline: true })
  .addWithInfo('Title', 'Page with title', () => (
    <Page title="Fresh Prince Of Bel-Air (Theme Song)">
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
  .addWithInfo('Width(small)', 'Page with small width styles', () => (
    <Page title="Small Page" width="small">
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
  .addWithInfo('Width(medium)', 'Page with medium width styles', () => (
    <Page title="Medium Page" width="medium">
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
  .addWithInfo('Width(large)', 'Page with large width styles', () => (
    <Page title="Large Page" width="large">
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
  .addWithInfo('Width(full)', 'Page with full width styles', () => (
    <Page title="Full Width Page" width="full">
      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there I'll tell you how
        I became the prince of a town called Bel-Air
      </p>
    </Page>
  ), { inline: true })
