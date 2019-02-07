import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'

import { Clock } from 'styled-icons/fa-regular/Clock'

import { TimeSince } from '../Utils/TimeSince'
import StyledLink from '../StyledUtils/StyledLink'
import Container from '../StyledUtils/Container'
import { Span } from '../StyledUtils/Text'
import NotificationDetails from './NotificationDetails'

/**
 * The content of the notification popup displayed when clicking on the top-right
 * bell in navbar.
 */
const NotificationsPopupContent = ({ notifications }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Container
        display="flex"
        justifyContent="space-between"
        width={1}
        p={2}
        borderBottom="1px solid"
        borderColor="black.100"
      >
        <Span fontWeight="bold">Notifications</Span>
        <StyledLink>Tout marquer comme lu</StyledLink>
      </Container>
      {notifications.length === 0 ? (
        <Box p={4}>Your notifications box is empty!</Box>
      ) : (
        <React.Fragment>
          {notifications.map(n => (
            <NotificationDetails key={n.id} notification={n}>
              {({ message, seenAt, insertedAt }) => (
                <Flex>
                  <Flex flexDirection="column">
                    <Box>{message}</Box>
                    <Span color="black.300">
                      <Clock size="1em"/>&nbsp;<TimeSince time={insertedAt} />
                    </Span>
                  </Flex>
                </Flex>
              )}
            </NotificationDetails>
          ))}
        </React.Fragment>
      )}
    </Flex>
  )
}

NotificationsPopupContent.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object)
}

export default NotificationsPopupContent
