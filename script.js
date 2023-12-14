
        const form = document.querySelector('form')
        const input = document.querySelector('input')
        const show = document.querySelector('p')
        const loader = document.querySelector('.loader')

        const infura_id = '29178f9cfb7c49e283d427d1812f1337'

        const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_id}`)



        const main = async (address) => {
            try{
                show.textContent='ETH BALANCE: '
                const balance =  await provider.getBalance(address)
                show.textContent += `${ethers.utils.formatEther(balance)}ETH`
            }catch{
                show.textContent=' '
                show.textContent += `ETH BALANCE:  ${address} is not found on the block`
                setTimeout(()=>{
                    show.textContent='ETH BALANCE: '
                },4000)
            }            
        }


        form.addEventListener('submit', (e) => {
            e.preventDefault()
            loader.style.display="block"
            
            setTimeout(()=>{
                main(input.value)
                loader.style.display="none"
            },4000)

            
        })