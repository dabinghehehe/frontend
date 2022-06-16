//表达式展示
/**
 * 1、识别常规变量
 * 2、原生js方法调用
 * 3、三元运算符（常用）
 */
const name = '老师'
const getAge = () => {
  return 18
}
const flag = true

//jsx列表渲染
/**
 * 技术方案：map
 */
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

//模板精简原则
const getHtag = (type)=>
{

}

function App() {
  return (
    <div className="App">
      <ul>
        {/* {songs.map(song => <li key={song.id}>{song.name}</li>)} */}
        {flag ? (<span>y-this is span</span> ): null}
      </ul>
    </div>
  );
}

export default App;
