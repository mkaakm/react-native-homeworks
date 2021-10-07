export const iconConfigs = {
    'Home':{
        iconName: 'home',
    },
    'All books':{
        iconName: 'book',
    },
    'List Of Books':{
        iconName: 'bookmark',
    },
    'Book Shop':{
        iconName: 'shopping-basket',
    },
    size: 20,
    sizeFocused: 25,
    color: '#fff',
    colorFocused: 'red',
    getConfig(name, focused = false){
        const {iconName} = this[name]
        const size = focused ? this.sizeFocused : this.size;
        const color = focused ? this.colorFocused : this.color;
        return{
            iconName, size, color
        }
    }
}
