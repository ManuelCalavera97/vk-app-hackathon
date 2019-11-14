import Icon24Back from '@vkontakte/icons/dist/24/back'
import {
  Cell,
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

const ActivityInfoFav = props => (

  <Panel id={props.id}>

    <PanelHeader
      left={<HeaderButton onClick={props.go} data-to="favorites">
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
          backgroundImage: `url("http://www.fainaidea.com/wp-content/uploads/2017/03/d3mon5joybl2w1ri_1024x683.jpg")`,
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}/>
        <div style={{
          height: 150,
          backgroundImage: `url("http://www.fainaidea.com/wp-content/uploads/2017/03/rybachkoe1.jpg")`,
          backgroundSize: 'cover',
          overflow: 'hidden'
        }}/>
      </Gallery>
      <Group title="Общая информация">
        <List>
          <Cell>
            <InfoRow title="Название">
              Тренажерный зал "Великан"
            </InfoRow>
          </Cell>
          <Cell expandable onClick={props.go} data-to="activitydetailsfav">
            <InfoRow title="Описание">
              Спортивно-оздоровительный ...
            </InfoRow>
          </Cell>
          <Cell expandable onClick={props.go} data-to="activityinfo">
            <InfoRow title="Сайт">
              Группа в ВК
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Категория">
              Спорт
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
              Нижневартовск
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Адрес">
              ул. Чапаева 67
            </InfoRow>
          </Cell>
        </List>
      </Group>

    </Group>
    <Div style={{paddingTop: 30, paddingBottom: 30, color: 'gray'}}/>
  </Panel>
)

ActivityInfoFav.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
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

export default ActivityInfoFav
