import $ from 'jquery';

export default class {

    constructor(firstNum, secondNum) {
        this.firstNum = parseInt(firstNum,10);
        this.secondNum = parseInt(secondNum,10);
        this.value = this.firstNum * this.secondNum ;
    }

    render() {
        $('button').off('click');

        let html = `
        <table>
            <tr>
                <td><input id="firstNum" type="text" value="${this.firstNum}" /><td>
                <td>X<td>
                <td><input id="secondNum" type="text" value="${this.secondNum}" /><td>
                <td>=<td>
                <td><input id="value" type="text" value="${this.value}"/><td>
                <td><button id="submit">submit</button><td>
            </tr>
        </table>
        `;

        $('body').empty().html(html);

        $('button').click(() => {
            this.multiply();
        });
    }

    multiply() {
        this.firstNum = parseInt($('#firstNum').val(), 10);
        this.secondNum = Number($('#secondNum').val(), 10);
        this.value = this.firstNum * this.secondNum;
        this.render();
    }
}