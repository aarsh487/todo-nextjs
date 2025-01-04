import { PostlistById } from '@/components/Postlist';
import Link from 'next/link';
import React, { Suspense } from 'react'

async function page({ params }: { params: Promise<{ id: string }>}) {
    return (
        <div className="text-center pt-32 px-5">
            <Suspense fallback="Loading...">
                <PostlistById params={await params} />
            </Suspense>
            
        </div>
      );
}

export default page