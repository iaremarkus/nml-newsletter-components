/* eslint-disable @next/next/no-img-element */
import { usePictures } from "hooks";

export const TwoColumnColorfulWithPictures = () => {
  const { urls, setUrls } = usePictures(4);

  return (
    <div className="relative grid grid-cols-2">
      <div className="flex flex-col gap-3 bg-rose-400 p-6">
        <img
          src={urls[0]}
          alt="Pic of foobar"
          width="100%"
          style={{ maxHeight: 300 }}
          className="object-cover"
          onClick={() => setUrls({ 0: prompt("enter url") })}
        />
        <h2 className="text-3xl uppercase font-bold" contentEditable>
          3 WAYS TO ENGAGE WITH YOUR REMOTE COWORKERS
        </h2>

        <p className="text-xl" contentEditable>
          As the world continues to transition to a remote work environment, many companies are struggling to figure out
          how to maintain team cohesion and engagement when employees are no longer in the same physical space.
          It&apos;s not easy! With the right mindset and strategies, however, it is possible to create a productive,
          collaborative, and enjoyable remote work environment something we will strive to achieve as our remote team
          continues to grow!
        </p>
      </div>

      <div className="flex flex-col gap-3 bg-pink-500 p-6">
        <img
          src={urls[1]}
          alt="Pic of foobar"
          width="100%"
          style={{ maxHeight: 300 }}
          className="object-cover"
          onClick={() => setUrls({ 1: prompt("enter url") })}
        />
        <h3 className="text-3xl uppercase font-bold" contentEditable>
          Stay Connected
        </h3>
        <p className="text-xl" contentEditable>
          Set aside dedicated times each week to catch up quickly with your colleagues. Take the time to ask about their
          hobbies, family, and interests. Building relationships with your colleagues is important for creating a
          positive, productive work environment. Connecting with your teammates in a virtual environment can be
          difficult, but it&apos;s necessary to maintain a strong team spirit.
        </p>
      </div>

      <div className="flex flex-col gap-3 bg-pink-700 p-6">
        <h3 className="text-3xl uppercase font-bold" contentEditable>
          Interact Socially
        </h3>
        <p className="text-xl" contentEditable>
          Just because vou&apos;re working remotely doesn&apos;t mean you can&apos;t have fun with vour colleagues.
          Don&apos;t be shy to schedule virtual happy hours, coffee breaks, or other activities - Ask our fabulous
          Project Manager Janet Mever for some of her retro icebreakers!
        </p>
        <img
          src={urls[2]}
          alt="Pic of foobar"
          width="100%"
          style={{ maxHeight: 300 }}
          className="object-cover mt-4"
          onClick={() => setUrls({ 2: prompt("enter url") })}
        />
      </div>

      <div className="flex flex-col gap-3 bg-rose-600 p-6">
        <h3 className="text-3xl uppercase font-bold" contentEditable>
          Cameras On
        </h3>
        <p className="text-xl" contentEditable>
          Don&apos;t be shy to put those cameras on every once in a while! Video conferencing is more personal and
          engaging.
        </p>
        <img
          src={urls[3]}
          alt="Pic of foobar"
          width="100%"
          style={{ maxHeight: 300 }}
          className="object-cover mt-4"
          onClick={() => setUrls({ 3: prompt("enter url") })}
        />
      </div>
    </div>
  );
};
