/* eslint-disable @next/next/no-img-element */

export const OneColumnWithPictures = () => (
  <div className="relative grid grid-cols-1 gap-8">
    <div className="flex flex-col gap-1">
      <h2 className="text-xl uppercase">3 WAYS TO ENGAGE WITH YOUR REMOTE COWORKERS</h2>

      <p>
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Pic of foobar"
          width="220"
          className="object-cover mr-5 float-left"
        />
        As the world continues to transition to a remote work environment, many companies are struggling to figure out
        how to maintain team cohesion and engagement when employees are no longer in the same physical space. It&apos;s
        not easy! With the right mindset and strategies, however, it is possible to create a productive, collaborative,
        and enjoyable remote work environment something we will strive to achieve as our remote team continues to grow!
      </p>
    </div>

    <div className="flex flex-col gap-1">
      <h3 className="text-xl uppercase">Cameras On</h3>
      <img
        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Pic of foobar"
        width="100%"
        style={{ maxHeight: 300 }}
        className="object-cover"
      />
      <p>
        Don&apos;t be shy to put those cameras on every once in a while! Video conferencing is more personal and
        engaging.
      </p>
    </div>

    <div className="flex flex-col gap-1">
      <h3 className="text-xl uppercase">Stay Connected</h3>
      <p>
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Pic of foobar"
          width="220"
          className="object-cover ml-5 float-right"
        />
        Set aside dedicated times each week to catch up quickly with your colleagues. Take the time to ask about their
        hobbies, family, and interests. Building relationships with your colleagues is important for creating a
        positive, productive work environment. Connecting with your teammates in a virtual environment can be difficult,
        but it&apos;s necessary to maintain a strong team spirit.
      </p>
    </div>

    <div className="flex flex-col gap-1">
      <h3 className="text-xl uppercase">Interact Socially</h3>
      <p>
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Pic of foobar"
          width="220"
          className="object-cover mr-5 float-left"
        />
        Just because vou&apos;re working remotely doesn&apos;t mean you can&apos;t have fun with vour colleagues.
        Don&apos;t be shy to schedule virtual happy hours, coffee breaks, or other activities - Ask our fabulous Project
        Manager Janet Mever for some of her retro icebreakers!
      </p>
    </div>
  </div>
);
