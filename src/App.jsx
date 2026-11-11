import './App.css'
import Button from "./components/Button.jsx";
import bagOne from './assets/bag_1.png'
import bagTwo from './assets/bag_2.png'
import bagThree from './assets/bag_3.png'
import bagFour from './assets/bag_4.png'
import Product from "./components/Product.jsx";
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import Title from "./components/Title.jsx";

function App() {
    function buttonInfo(event) {
        console.log(event.target.textContent)
    }

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button contentButton="to the collection"/>
                <Button contentButton="shop all bags"/>
                <Button contentButton="pre-orders"/>
            </nav>

            <main>
                <Product
                    image={bagOne}
                    title='The handy bag'
                    price='€400,-'
                />
                <Product
                    image={bagTwo}
                    title='The stylish bag'
                    price='€250,-'
                />
                <Product
                    image={bagThree}
                    title='The simple bag'
                    price='€300,-'
                />
                <Product
                    image={bagFour}
                    title='The trendy bag'
                    price='€150,-'
                />
            </main>
            <footer>
                {/*Een afbeelding van het merk of de designers (als er geen tekst in staat)*/}
                {/*Een h2-element voor de titel en p-elementen voor de paragrafen (als er wel tekst in staat)*/}
                <Title>
                    <h2>Brand</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloremque illo iste quidem quis
                        sunt. Animi aspernatur ducimus eos facilis fugit ipsum praesentium saepe velit vero vitae.
                        Doloremque maiores, rerum?
                    </p>
                </Title>
                <Title>
                    <img src={brand} alt='logo of brand'/>
                </Title>
                <Title>
                    <h2>Our story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias eos explicabo illum
                        labore maxime repellendus ullam. Aspernatur commodi corporis, fuga inventore ipsum, laborum
                        obcaecati quibusdam sed, sint sit voluptatibus.
                    </p>
                </Title>
                <Title>
                    <img src={story} alt="people together"/>
                </Title>
            </footer>
        </>
    )
}

export default App
