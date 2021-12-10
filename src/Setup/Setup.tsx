import { useQuery, useMutation } from '@apollo/client'
import * as React from 'react'
import { connect } from 'react-redux'

import { Button, Title } from '@habx/ui-core'

import { Budget } from './components/Budget'
import { Exposure } from './components/Exposure'
import { Surface } from './components/Surface'
import { Typology } from './components/Typology'
import { projectQuery, mutationSetup } from './Setup.query'
import { SetupContainer } from './Setup.style'
import { project } from './types/project'
import { upsertSetup } from './types/upsertSetup'

const mapStateToProps = (state) => {
  return state
}

const SetupComponent = (props) => {
  const { dispatch } = props
  const projectResponse = useQuery<project>(projectQuery)
  const [upsertSetupHook] = useMutation<upsertSetup>(mutationSetup)

  const sendForm = () => {
    const { budget, surface, typology, exposures } = props
    const objToSend = { budget, surface, typology, exposures }
    upsertSetupHook({ variables: { setup: { ...objToSend } } })
  }

  return (
    <SetupContainer>
      <Title type="header">{projectResponse.data?.project?.name}</Title>
      <Budget
        min={projectResponse.data?.project?.properties?.priceRange?.min}
        max={projectResponse.data?.project?.properties?.priceRange?.max}
        dispatch={dispatch}
      />
      <Surface
        min={projectResponse.data?.project?.properties?.surfaceRange?.min}
        max={projectResponse.data?.project?.properties?.surfaceRange?.max}
        dispatch={dispatch}
      />
      <Typology
        typologies={projectResponse.data?.project?.properties?.typologies}
        dispatch={dispatch}
      />
      <Exposure
        exposures={projectResponse.data?.project?.properties?.exposures}
        dispatch={dispatch}
      />
      <br />
      <Button onClick={() => sendForm()}>Valider</Button>
    </SetupContainer>
  )
}

export const Setup = connect(mapStateToProps)(SetupComponent)
