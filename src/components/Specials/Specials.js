import classNames from 'classnames'
import Button from '../Button/Button'
import style from './styleSpecials.module.scss'

const Specials = () => {
  return (
    <section className={classNames(style.specials, 'container')}>
      <div className={style.specialsHeader}>
        <h2 className={classNames(style.specialsHeader, 'font-subtitle')}>This week specials!</h2>
        <Button>Online menu</Button>
      </div>

    </section>
  )
}

export default Specials
