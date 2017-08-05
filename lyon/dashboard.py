import plotly.dashboard_objs as dashboard
import IPython.display
from IPython.display import Image

dash = dashboard.Dashboard()
dash.get_preview()

box_1 = {
    'type': 'box',
    'boxType': 'plot',
    'fileId': 'PlotBot:1296',
    'title': 'scatter-for-dashboard'
}
 
box_2 = {
    'type': 'box',
    'boxType': 'plot',
    'fileId': 'PlotBot:1298',
    'title': 'pie-for-dashboard'
}
 
box_3 = {
    'type': 'box',
    'boxType': 'plot',
    'fileId': 'PlotBot:1342',
    'title': 'box-for-dashboard',
}

dash.insert(box_1)
dash.insert(box_2)
dash.insert(box_3)
