import React from 'react'
import Input from './Input'

const InputList = () => {
  return (
    <>
      <div className='contanear'>
        <h1>Inputs</h1>
        <div className='ip-items'>
          <Input cName={'ip-1'} defaultText={`<Input />`} />
          <Input cName={'ip-1 ip-1-1'} defaultText={`&:hover`} />
          <Input cName={'ip-1 ip-1-2'} defaultText={`&:focus`} />
        </div>

        <div className='ip-items'>
          <Input cName={'ip-2'} defaultText={`<Input error />`} />
          <Input cName={'ip-2 ip-1-1'} defaultText={`&:hover`} />
          <Input cName={'ip-2 ip-1-2'} defaultText={`&:focus`} />
        </div>
        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input disabled />`}</p>
            <input
              className='ip-3 ip'
              type='text'
              placeholder='Placeholder'
              disabled
            />
          </div>
        </div>

        <div className='ip-items'>
          <Input
            cName={'ip-4 '}
            defaultText={`<Input helperText=”Some interesting text” />`}
          />
          <Input
            cName={'ip-4 '}
            defaultText={`<Input helperText=”Some interesting text” error />`}
          />
        </div>

        {/*
        <div className='ip-items'>
          <Input
            cName={'ip-5'}
            defaultText={`<Input disabled />`}
            text={`Disabled`}
          />
          <Input
            cName={'ip-5 ip-5-1'}
            defaultText={`<Input variant=”text” disabled />`}
            text={`Disabled`}
          />
        </div>
        <div className='ip-items'>
          <Input
            cName={'ip-6'}
            defaultText={`<Input startIcon=”local_grocery_store” />`}
            iconstart={'local_grocery_store'}
          />
          <Input
            cName={'ip-6'}
            defaultText={`<Input endIcon=”local_grocery_store” />`}
            iconend={`local_grocery_store`}
          />
        </div>

        <div className='ip-items'>
          <Input cName={'ip-7'} defaultText={`<Input size=”sm” />`} />
          <Input cName={'ip-7-1'} defaultText={`<Input size=”md” />`} />
          <Input cName={'ip-7-2'} defaultText={`<Input size=”lg” />`} />
        </div>

        <div className='ip-items'>
          <Input cName={'ip-8'} defaultText={`<Input color=”default” />`} />
          <Input cName={'ip-8-1'} defaultText={`<Input color=”primary” />`} />
          <Input
            cName={'ip-8-2'}
            defaultText={`<Input color=”secondary” />`}
            text={`Secondary`}
          />
          <Input
            cName={' ip-8-3'}
            defaultText={`<Input color=”danger”  />`}
            text={`Danger`}
          />
        </div>

        <div className='ip-items'>
          <Input cName={'ip-9 '} defaultText={`&:hover, &:focus`} />
          <Input cName={'ip-9-1'} text={`Default`} />
          <Input cName={'ip-9-2'} text={`Secondary`} />
          <Input cName={'ip-9-3'} text={`Danger`} />
        </div> */}
        <footer>
          <p>
            created by <a href='https://github.com/jyotip101'>jyoti_p</a> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </>
  )
}

export default InputList
