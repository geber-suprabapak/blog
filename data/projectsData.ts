interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Skanida Apps',
    description: `Sistem absensi murid berbasis mobile yang memudahkan pengelolaan data absensi secara efisien dan akurat.`,
    imgSrc: '/static/images/sanida.png',
    href: 'https://artifacts.hysilens.my.id',
  },
  
]

export default projectsData
