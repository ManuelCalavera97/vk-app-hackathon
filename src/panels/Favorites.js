import {
  Avatar,
  Button,
  Cell,
  Div,
  Group,
  Panel,
  PanelHeader
} from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

import './panelsCSS/ActivityStrip.css'

const Favorites = props => (
  <Panel id={props.id}>

    <PanelHeader>Каталог Занятий</PanelHeader>

    <Group>
      <Cell expandable onClick={props.go} data-to="activityinfofav"
            size="l"
            description="Спорт"
            before={<Avatar
              src="http://www.fainaidea.com/wp-content/uploads/2017/03/d3mon5joybl2w1ri_1024x683.jpg"
              size={80}/>}
            bottomContent={
              <div style={{display: 'flex'}}>
                <Button size="m" stretched="true"
                        level="secondary">Удалить</Button>
              </div>
            }
      >
        Тренеровочный зал
      </Cell>
    </Group>
    <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
  </Panel>
)

Favorites.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default Favorites
