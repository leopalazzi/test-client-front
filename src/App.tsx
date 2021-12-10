import { ApolloProvider } from '@apollo/client'
import React from 'react'

import { ThemeProvider, Provider } from '@habx/ui-core'

import { client } from './api/apollo'
import { SetupProvider } from './Setup/components/SetupProvider'

const App = () => {
  return (
    <ThemeProvider>
      <Provider>
        <ApolloProvider client={client}>
          <SetupProvider />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
