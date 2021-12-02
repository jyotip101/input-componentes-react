import React from 'react'
import Input from './Input'

const InputList = () => {
  return (
    <>
      <div className='contanear'>
        <h1>Inputs</h1>
        <div className='ip-items'>
          <Input
            labelColor={`label-1`}
            cName={'ip-1'}
            defaultText={`<Input />`}
          />
          <Input
            labelColor={`label-1-1`}
            cName={'ip-1 ip-1-1'}
            defaultText={`&:hover`}
          />
          <Input
            labelColor={`label-1-2`}
            cName={'ip-1 ip-1-2'}
            defaultText={`&:focus`}
          />
        </div>

        <div className='ip-items'>
          <Input
            labelColor={`label-2`}
            cName={'ip-2'}
            defaultText={`<Input error />`}
          />
          <Input
            labelColor={`label-2-1`}
            cName={'ip-2 ip-1-1'}
            defaultText={`&:hover`}
          />
          <Input
            labelColor={`label-2-2`}
            cName={'ip-2 ip-2-2'}
            defaultText={`&:focus`}
          />
        </div>

        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input disabled />`}</p>
            <div className='ip-control'>
              <label className='label-3' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-3 ip'
                type='text'
                id='name'
                name='name'
                placeholder='Placeholder'
                disabled
              />
            </div>
          </div>
        </div>

        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input helperText=”Some interesting text” />`}</p>
            <div className='ip-control'>
              <label className='label-4' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-4 ip'
                type='text'
                id='name'
                name='name'
                placeholder='Placeholder'
              />
              <span className='span-1'>Some interesting text</span>
            </div>
          </div>
          <div className='ip-contant'>
            <p>{`<Input helperText=”Some interesting text” error />`}</p>
            <div className='ip-control'>
              <label className='label-4-1' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-4-1 ip'
                type='text'
                id='name'
                name='name'
                placeholder='Placeholder'
              />
              <span className='span-2'>Some interesting text</span>
            </div>
          </div>
        </div>

        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input startIcon />`}</p>
            <div className='ip-control'>
              <label className='label-5' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-5 ip'
                type='text'
                id='name'
                name='name'
                placeholder='Placeholder'
              />
              <span class='material-icons icon-1'>call</span>
            </div>
          </div>
          <div className='ip-contant'>
            <p>{`<Input endIcon />`}</p>
            <div className='ip-control'>
              <label className='label-5-1' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-5-1 ip'
                type='text'
                id='name'
                name='name'
                placeholder='Placeholder'
              />
              <span class='material-icons icon-2'>lock</span>
            </div>
          </div>
        </div>

        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input value=”Text” />`}</p>
            <div className='ip-control'>
              <label className='label-6' htmlFor='name'>
                Label
              </label>
              <input
                className='ip-6 ip'
                type='text'
                id='name'
                name='name'
                value='Text'
              />
            </div>
          </div>
        </div>

        <div className='ip-items'>
          <Input
            labelColor={`label-7`}
            cName={'ip-7'}
            defaultText={`<Input size=”sm” />`}
          />
          <Input
            labelColor={`label-7`}
            cName={'ip-7-1'}
            defaultText={`<Input size=”md” />`}
          />

          <Input
            labelColor={`label-7`}
            cName={' ip-7-2'}
            defaultText={`<Input fullWidth  />`}
            text={`Text`}
          />
        </div>

        <div className='ip-items'>
          <div className='ip-contant'>
            <p>{`<Input multiline row=”4” />`}</p>
            <div className='ip-control'>
              <label className='label-8' htmlFor='name'>
                Label
              </label>
              <textarea
                className='ip-8 ip'
                rows='4'
                type='text'
                id='name'
                name='name'
                placeholder='placeholder'
              />
            </div>
          </div>
        </div>
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
