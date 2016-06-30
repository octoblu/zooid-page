import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'
import Heading from 'zooid-heading'
import Spinner from 'zooid-spinner'

import Page from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<Page />', () => {
  describe('when given a title as prop', () => {
    it('should render the title', () => {
      const sut = shallow(<Page title="Alicia Keys" />)
      expect(sut).to.contain(<Heading level={3}>Alicia Keys</Heading>)
    })
  })

  describe('when loading prop is truthy', () => {
    it('should display a spinner', () => {
      const sut = shallow(<Page loading />)
      expect(sut).to.contain(<Spinner size="large" className={styles.spinner} />)
    })
  })

  describe('when given an error prop', () => {
    it('should render an error message', () => {
      const error = new Error('Bruh...')
      const sut = mount(<Page error={error} />)

      expect(sut).to.contain.text('Error: Bruh...')
    })
  })

  describe('when given children', () => {
    it('should render the children', () => {
      const sut = shallow(<Page><div>Some text</div></Page>)
      expect(sut).to.contain(<div>Some text</div>)
    })
  })

  describe('when given a width prop', () => {
    describe('when width prop is set to small', () => {
      it('should render a page with small width', () => {
        const sut = shallow(<Page width="small" />)
        expect(sut).to.have.className(styles.small)
      })
    })

    describe('when width prop is set to medium', () => {
      it('should render a page with medium width', () => {
        const sut = shallow(<Page width="medium" />)
        expect(sut).to.have.className(styles.medium)
      })
    })

    describe('when width prop is set to large', () => {
      it('should render a page with large width', () => {
        const sut = shallow(<Page width="large" />)
        expect(sut).to.have.className(styles.large)
      })
    })

    describe('when width prop is set to full', () => {
      it('should render a page with full width', () => {
        const sut = shallow(<Page width="full" />)
        expect(sut).to.have.className(styles.full)
      })
    })

    it('should default to small if provided width does not exist', () => {
      const sut = shallow(<Page width="cats" />)
      expect(sut).to.have.className(styles.small)
    })
  })

  describe('when give a className prop', () => {
    const sut = shallow(<Page className="catsAreAwesome" />)
    it('should merge the className prop in', () => {
      expect(sut).to.have.className("catsAreAwesome")
    })
  })
})
