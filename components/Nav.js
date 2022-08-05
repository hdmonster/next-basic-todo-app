import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import SecondaryButton from './button/SecondaryButton'

function Nav() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div>MyTodo</div>
      <Link href='/create'>
        <SecondaryButton label='Add' action={() => router.push('/create')} />
      </Link>
    </nav>
  )
}

export default Nav
