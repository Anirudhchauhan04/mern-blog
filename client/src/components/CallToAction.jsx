import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about CSS?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout this game for learning CSS
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://flexboxfroggy.com/" target='_blank' rel='noopener noreferrer'>
                    FLEXBOX FROGGY
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://velog.velcdn.com/images/ko9612/post/fb0844af-bd2a-406b-8771-521f76efe56c/image.png" />
        </div>
    </div>
  )
}