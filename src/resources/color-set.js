const colorSet = status => {
  if (status) {
    return {
      background: '#221D1A',
      backgroundVariant: '#443E3A',
      contrast: '#FFF'
    }
  } else {
    return {
      background: '#FED',
      backgroundVariant: '#FFF',
      contrast: '#221D1A'
    }
  }
}

export default colorSet;