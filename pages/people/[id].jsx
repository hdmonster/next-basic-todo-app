import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from '../../lib/axios'

function Person({ person }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Profile of {person.first_name}</title>
      </Head>
      <div>
        Hello, {person.first_name} {person.last_name}
      </div>
    </>
  )
}

/* 
Contoh implementasi SSR
-> dirender sebelum load di client 
*/

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get('/users/' + params.id)
  const person = res.data

  return {
    props: {
      person: person.data,
    },
  }
}

/* 
Contoh implementasi Static Generation
-> dijadiin static tiap pagenya, jadi loadnya lebih cepet

Assign object dari params ke props nya component/page

export const getStaticProps = async ({ params }) => {
  const req = await fetch(`https://reqres.in/api/users/${params.id}`)
  const Person = await req.json()

  return {
    props: {
      Person: Person.data,
    },
  }
}

Kasih tau next page mana aja yang dirender secara dynamic

export const getStaticPaths = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=1`)
  const Person = await req.json()

  const paths = Person.data.map(person => {
    return { params: { id: person.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

*/

export default Person
