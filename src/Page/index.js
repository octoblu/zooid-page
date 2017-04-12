import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Heading from 'zooid-heading'
import Spinner from 'zooid-spinner'

import styles from './styles.css'

const widthEnum = ['small', 'medium', 'large', 'full']
const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.object,
  loading: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  title: PropTypes.string,
}

const defaultProps = {
  children: null,
  className: '',
  error: null,
  loading: false,
  title: null,
  width: 'small',
}

const Page = ({ children, className, error, loading, width, title }) => {
  let pageWidth = width
  if (widthEnum.indexOf(width) < 0) pageWidth = 'small'

  const classes = classNames(styles[pageWidth], className)

  return (
    <div className={classes}>
      {title && <Heading level={3}>{title}</Heading>}
      {loading && <Spinner size="large" className={styles.spinner} />}
      {error && <div>Error: {error.message}</div>}

      {children}
    </div>
  )
}

Page.propTypes    = propTypes
Page.defaultProps = defaultProps

export default Page
