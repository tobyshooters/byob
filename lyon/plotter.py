import plotly
import plotly.plotly as py
from plotly.graph_objs import *

plotly.tools.set_credentials_file(username='INSERT PLOTLY USERNAME HERE', api_key='INSERT API KEY HERE')

def movimentacoes():
    trace0 = Scatter(
        x=['2017-06-31', '2017-07-01', '2017-07-02', '2017-07-03', '2017-07-04', '2017-07-05', '2017-07-06'],
        y=[10, 15, 13, 10, 20, 23, 12],
        name="Emitidos"
    )

    trace1 = Scatter(
        x=['2017-06-31', '2017-07-01', '2017-07-02', '2017-07-03', '2017-07-04', '2017-07-05', '2017-07-06'],
        y=[16, 5, 11, 9, 10, 21, 20],
        name="Trocados"
    )

    data = Data([trace0, trace1])
    
    plot_url = py.plot(data, filename = 'basic-line')

movimentacoes()
