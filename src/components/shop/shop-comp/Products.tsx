import { useRef } from 'react';
import "../css/products.css";

export default function Products({ temdata }) {
  const containerRef = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const container = containerRef.current[index];
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;
    const rotateY = -1 / 5 * offsetX + 30;
    const rotateX = 4 / 30 * offsetY - 30;

    if (container) {
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseOut = (index: number) => {
    const container = containerRef.current[index];

    if (container) {
      container.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  };

  return (
    <div className="inline-block">
      <div className="grid lg:grid-cols-3 grid-cols-2 mx-8">
        {temdata.map((item, i) => (
          <div
            className="bling-container z-0 pointer-events-auto"
            key={i}
            ref={(el) => (containerRef.current[i] = el as HTMLDivElement)}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseOut={() => handleMouseOut(i)}
          >
            <section key={i} className={`p-3 hover:bg-gray-900/10 rounded-lg`}>
              <img src={item.url} alt="" className="card-img rounded-lg" />
              <div className=''>
                <h4>{item.new && "신상품"}</h4>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price.toLocaleString()} 원</p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}