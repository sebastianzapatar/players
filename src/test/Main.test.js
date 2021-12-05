import {shallow} from 'enzyme';
import { Main } from "../components/Main";

describe('Test app',()=>{
    test('test1 render', () => {
        const wrapper=shallow(<Main/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('test2 Not Matches found', () => {
        const wrapper=shallow(<Main/>);
        const text=wrapper.find('h1').text().trim();
        expect(text).toBe('No matches found');
    })
    test('Change in text', async() => {
        const wrapper=shallow(<Main/>);
        const value='0';
        wrapper.find('input').simulate('change',{target: {value}});
        expect(wrapper.find('h1').text()).toBe('No matches found');
    })
    test('Change2 in text', async() => {
        const wrapper=shallow(<Main/>);
        const value='-150';
        wrapper.find('input').simulate('change',{target: {value}});
        expect(wrapper.find('h1').text()).toBe('No matches found');
    })
    test('Change3 in text', async() => {
        const wrapper=shallow(<Main/>);
        const value='150';
        wrapper.find('input').simulate('change',{target: {value}});
        wrapper.contains('li')
    })
})