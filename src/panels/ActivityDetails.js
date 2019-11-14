import Icon24Back from '@vkontakte/icons/dist/24/back'
import { Div, Group, HeaderButton, Panel, PanelHeader } from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

const ActivityDetails = props => (
  <Panel id={props.id}>

    <PanelHeader
      left={<HeaderButton onClick={props.go} data-to="activityinfo">
        {<Icon24Back/>}
      </HeaderButton>}
    >
      Каталог Занятий
    </PanelHeader>

    <Group>
      <Div style={{paddingTop: 10, paddingBottom: 10, color: 'gray'}}>
        {props.activityjson.description}
      </Div>
    </Group>
    <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
  </Panel>
)

ActivityDetails.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  activityjson: PropTypes.object.isRequired,
  setStory: PropTypes.string,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default ActivityDetails
