import axios from '../../lib/axios'
import Link from 'next/link'

function PeopleList({ people }) {
  return (
    <>
      <div>Some people u might know</div>
      <ul>
        {people.map(person => (
          <>
            <Link href={'/people/' + person.id.toString()}>
              <li key={person.id}>
                {person.first_name} {person.last_name}
              </li>
            </Link>
          </>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/users?page=1')
  const people = res.data

  return {
    props: {
      people: people.data,
    },
  }
}

export default PeopleList
