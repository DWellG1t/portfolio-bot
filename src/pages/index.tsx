import Head from 'next/head';

import Title from '@/components/templates/title';

import SectionIntro from '@/components/pages/index/sectionIntro';
import SectionService from '@/components/pages/index/sectionService';
import SectionOrder from '@/components/pages/index/sectionOrder';
import SectionTech from '@/components/pages/index/sectionTech';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <SectionIntro />
      <Title title="Услуги"/>
      <SectionService />
      <Title title="Порядок работ"/>
      <SectionOrder />
      <Title title="Технологии"/>
      <SectionTech />
      {/* <Title title="Оставить заявку"/> */}
    </>
  )
} 