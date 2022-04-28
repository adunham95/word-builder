import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Builder() {

    const [section, setSection] = useState('')

    return (
      <main>
          <form id="buildIframe">
          <h1>Word Board</h1>
          <label>
              Words <small>(Separate with commas.)</small>
              <input id="word"/>
          </label>
          <label>
            Section
            <select id="section">
                <optgroup label="Section 1">
                  <option>1.1</option>
                  <option>1.2</option>
                  <option>1.3</option>
                  <option>1.4</option>
                  <option>1.5</option>
                  <option>1.6</option>
                </optgroup>
                <optgroup label="Section 2">
                  <option>2.1</option>
                  <option>2.2</option>
                  <option>2.3</option>
                  <option>2.4</option>
                  <option>2.5</option>
                </optgroup>
                <optgroup label="Section 3">
                  <option>3.1</option>
                  <option>3.2</option>
                  <option>3.3</option>
                  <option>3.4</option>
                  <option>3.5</option>
                </optgroup>
                <optgroup label="Section 4">
                  <option>4.1</option>
                  <option>4.2</option>
                  <option>4.3</option>
                  <option>4.4</option>
                </optgroup>
                <optgroup label="Section 5">
                  <option>5.1</option>
                  <option>5.2</option>
                  <option>5.3</option>
                  <option>5.4</option>
                  <option>5.5</option>
                </optgroup>
                <optgroup label="Section 6">
                  <option>6.1</option>
                  <option>6.2</option>
                  <option>6.3</option>
                  <option>6.4</option>
                </optgroup>
            </select>
        </label>
        <button id="viewPage">View Page</button>
          <button>Generate iFrame Code</button>
      </form>
          </main>
    );
  }

export default Builder