import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
          
  <div className="hero-content text-center flex-col">
  <Image src="/brand.webp" priority alt="Brand" width={200} height={200} />
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Forty-Two</h1>
      <p className="py-6">一个「有点不一样」的信息分享平台</p>
      <button className="btn btn-primary">开始入门</button>
    </div>
  </div>
</div>
    )
    }
