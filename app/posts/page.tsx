import { InputForm } from '@/components/InputForm';
import { Postlist } from '@/components/Postlist';
import React, { Suspense } from 'react'

function page() {
    return (
        <div className="text-center pt-32 px-5">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">All posts</h1>
          <Suspense fallback="Loading...">
            <Postlist />
          </Suspense>
        </div>
      );
}

export default page