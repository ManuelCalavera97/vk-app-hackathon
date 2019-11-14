import { Avatar, Cell, Div, Group, Panel, PanelHeader } from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'
import './panelsCSS/ActivityStrip.css'

const ActivityStrip = props => {
  const result = props.activityjson.result

  return (
    <Panel id={props.id}>
      <PanelHeader>Каталог Занятий</PanelHeader>
        
      {result.map((item) => {
        return <Group>
          <Cell expandable onClick={props.go} data-to={item.id.toString()}
                size="m"
                description={item.category}
                multiline="true"
                before={<Avatar src={item.image} size={80}/>}
          >
            {item.name}
          </Cell>
        </Group>
      })}

      <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
    </Panel>
  )
}

ActivityStrip.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  changeId: PropTypes.func.isRequired,
  activityjson: PropTypes.object.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default ActivityStrip
