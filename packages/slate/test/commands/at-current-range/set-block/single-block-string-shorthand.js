/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.setBlocks('code')
}

export const input = (
  <value>
    <document>
      <paragraph>
        <cursor />word
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <code>
        <cursor />word
      </code>
    </document>
  </value>
)
