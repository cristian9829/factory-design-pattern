class HttpAdapter {
    constructor(private _type: string) {}
    get(){
        throw new Error("Method not implemented! ")
    }

    post(){
        throw new Error("Method not implemented! ")
    }
    
    put(){
        throw new Error("Method not implemented! ")
    }
    
    delete(){
        throw new Error("Method not implemented! ")
    }

    get type(): string {
        return this._type;
    }
}

class HttpAdapterNest extends HttpAdapter{
    constructor(){
        super("nest");
    }
    get(){
        console.log(`[${this.type}] GET method`);
    }

    post() {
        console.log(`[${this.type}] POST method`);
    }

    /** @override put() method */
    put() {
        console.log(`[${this.type}] PUT method`);
    }

    /** @override delete() method */
    delete() {
        console.log(`[${this.type}] DELETE method`);
    }
}

class HttpAdapterExpress extends HttpAdapter{
    constructor(){
        super("express");
    }
    get(){
        console.log(`[${this.type}] GET method`);
    }

    post() {
        console.log(`[${this.type}] POST method`);
    }

    /** @override put() method */
    put() {
        console.log(`[${this.type}] PUT method`);
    }

    /** @override delete() method */
    delete() {
        console.log(`[${this.type}] DELETE method`);
    }
}

interface HttpAdapterFactory{
    makeAdapter(): HttpAdapter;
}

class HttpAdapterFactoryNest implements HttpAdapterFactory{
    makeAdapter() {
        return new HttpAdapterNest()
    }
}

class HttpAdapterFactoryExpress implements HttpAdapterFactory{
    makeAdapter() {
        return new HttpAdapterExpress()
    }
}

function main(factory: HttpAdapterFactory){
    const instanceAdapter = factory.makeAdapter();
    console.log(instanceAdapter)
    instanceAdapter.get()
}


main(new HttpAdapterFactoryNest())
main(new HttpAdapterFactoryExpress())