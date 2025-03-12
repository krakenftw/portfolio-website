'use client';
import EachTool from './EachTool';
import Website from './Website';

export default function Experience() {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='flex gap-2 flex-col'>
        <h1 className='text-4xl font-semibold'>Work Experience</h1>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <span className='relative text-xl font-semibold'>
              smallest.ai
            </span>
            <div className='flex gap-2'>
              <Website url='https://smallest.ai' />
            </div>
          </div>
          <span className='text-gray-400'>
            At Smallest.ai, I spearheaded the development of Waves,
            architecting a microservices-driven infrastructure that
            scales to 10K+ requests/min for our TTS models. I designed
            and deployed Kubernetes clusters, optimized backend
            performance, and built dynamic frontend interfaces to
            handle complex workflows. From deep backend optimizations
            to feature-rich UI/UX, I engineered scalable,
            high-performance applications—leading everything on Waves
            and pushing tech boundaries to new heights.
          </span>
          <EachTool
            names={[
              'Next.js',
              'Python',
              'Node.js',
              'Kubernetes',
              'MongoDB',
              'Zustand',
              'TailwindCSS',
              'CI / CD',
              'Redis',
              'AWS'
            ]}
          />
        </div>
      </div>
    </div>
  );
}
