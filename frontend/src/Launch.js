function Launch() {
    return (<>
                <h1>Launcher</h1>
                <Switch>
                    <Route path="/login" exact
                               component={Login}></Route>
                    <Route path="/register" exact
                               component={Register}></Route>
                    <Route path="*"
                               component={NotFound}></Route>
                    <Route path="/login" exact
                               component={Login}></Route>
                        <Route path="/register" exact
                               component={Register}></Route>
                        <Route path="*"
                               component={NotFound}></Route>
                               <Route path="/login" exact
                               component={Login}></Route>
                        <Route path="/register" exact
                               component={Register}></Route>
                        <Route path="*"
                               component={NotFound}></Route>
                </Switch>
            </>);
}

export default Launch;