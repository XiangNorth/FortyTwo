import Image from 'next/image'

export default function Intro() {
    return (
        <div className="flex flex-col items-center w-full bg-base-200 gap-10 border-t border-base-300 pt-10">
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="​什么是信息？" className="input input-bordered" />
            <button className="btn btn-square btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl md:w-96">
          <div className="card-body gap-10">
            <p className='card-title'><i>”信息是用来消除不确定性的东西”</i></p>
            <div className="card-actions justify-end">
              <div className="avatar">
                <p>信息论奠基人<br />Claude Elwood Shannon</p>
                <div className="w-12 rounded-full">
                  <Image src="/Claude.webp" alt='Claude' width="20" height="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
