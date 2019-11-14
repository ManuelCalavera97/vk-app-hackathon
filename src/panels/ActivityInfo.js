import Icon24Back from '@vkontakte/icons/dist/24/back'
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite'
import {
  Cell,
  CellButton,
  Div,
  Gallery,
  Group,
  HeaderButton,
  InfoRow,
  List,
  Panel,
  PanelHeader
} from '@vkontakte/vkui'
import PropTypes from 'prop-types'
import React from 'react'

const ActivityInfo = props => (

  <Panel id={props.id}>

    <PanelHeader
      left={<HeaderButton onClick={props.go} data-to="activitystrip">
        {<Icon24Back/>}
      </HeaderButton>}
    >
      Каталог Занятий
    </PanelHeader>
    <Group>
      <Gallery
        slideWidth="90%"
        style={{height: 150}}
        bullets="dark"
      >
        <div style={{
          height: 150,
          backgroundImage: "url(" + props.activityjson.image+ ")",
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}/>

      </Gallery>
      <CellButton before={<Icon24Favorite/>}>Добавить в Избранное</CellButton>
      <Group title="Общая информация">
        <List>

          <Cell>
            <InfoRow title="Название">
              {props.activityjson.name}
            </InfoRow>
          </Cell>
          <Cell expandable onClick={props.go} data-to="activitydetails">
            <InfoRow title="Описание">
              {props.activityjson.description}
            </InfoRow>
          </Cell>
          <Cell expandable onClick={props.go} data-to="activityinfo">
            <InfoRow title="Сайт">
              Группа в ВК
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Категория">
              {props.activityjson.category}
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Возрастное ограничение">
              Нет
            </InfoRow>
          </Cell>
        </List>
      </Group>
      <Group title="Расположение">
        <List>
          <Cell>
            <InfoRow title="Город">
              {props.activityjson.address.city}
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Адрес">
              {props.activityjson.address.destination}
            </InfoRow>

          </Cell>
        </List>
      </Group>

    </Group>

    <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
  </Panel>
)

ActivityInfo.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  activityjson: PropTypes.object.isRequired,
  setStory: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
}

export default ActivityInfo
