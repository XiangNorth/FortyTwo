import { IconFilter, IconMessageChatbot, IconMessageCircle2Filled, IconSparkles, IconStack2 } from '@tabler/icons-react';

export default function Description() {
    return (<>
        <div className="container mx-auto my-5">
            <div className="flex items-center mt-10 w-full">
                <div className="w-full md:w-9/10 mr-auto ml-auto flex flex-col items-center justify-center gap-5">
                    <IconStack2 size={64} stroke={1.5} className="text-primary" />
                    <div className="font-medium text-2xl">信息堆</div>
                    <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
                        <div className="card bg-primary prose p-5 w-full md:basis-1/2 text-primary-content">
                            <h3 className="self-center text-primary-content text-2xl">什么是「信息堆」？</h3>
                            <p>信息堆是一种新的信息组织和呈现方式，目的是为了帮助用户更快速和便捷地找到“有效信息“。用户可以在信息堆里快速浏览信息，通过各种维度筛选信息，还可以「点亮」信息，让有效信息被更多人看到，或者「回复」信息，与其他用户实时交流。</p>
                            <b>从另一个角度理解:</b>
                            <p>「信息堆」= 搜索引擎 + 聊天室 + AI</p>
                        </div>
                        <div className="w-full md:basis-1/2 h-full prose flex flex-col gap-10 items-center md:items-baseline">
                            <div className='flex items-center'>
                                <IconMessageChatbot size={32} stroke={1.5} className='text-primary' />
                                加入信息堆，实时交流
                            </div>
                            <div className='flex items-center'>
                                <IconSparkles size={32} stroke={1.5} className='text-primary' />
                                「点亮」有效信息
                            </div>
                            <div className='flex items-center'>
                                <IconMessageCircle2Filled size={32} stroke={1.5} className='text-primary' />
                                「回复」别人信息
                            </div>
                            <div className='flex items-center'>
                                <IconFilter size={32} stroke={1.5} className='text-primary' />
                                多维度筛选，找到有效信息
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
